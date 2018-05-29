import React from 'react';
import { Header, Container, Grid, Segment, Button, Form } from 'semantic-ui-react';

import NavBar from '../../components/NavBar.jsx';
import Footer from '../../components/Footer.jsx';
import { quotes } from '../../../dist/assets/quotes/quotes.js';

class WoTR_Calc extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mordor: 'n',
			eyes: 0,
			freePeoples: 0,
			nazgul: 'n',
			shadowArmies: 'n',
			shadowStronghold: 'n',
			chanceOfDiscovery: 0
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ resize: window.innerWidth <= 1600 })
	}

	handleChange(e, {name, value}) {
		this.setState({ [name]: value })
	}

	generateDiceArray(max) {
		let output = [], index = 0;
		while (index <= max) {
			output.push({ value: index, key: index, text: String(index) });
			index++;
		}
		return output;
	}
	
	calculate() {
		let { eyes, freePeoples, mordor, nazgul, shadowArmies, shadowStronghold } = this.state;
		let rerolls = 0;
		this.state.nazgul === 'y' && rerolls++;
		this.state.shadowArmies === 'y' && rerolls++;
		this.state.shadowStronghold === 'y' && rerolls++;
		if (rerolls > eyes) rerolls = eyes;
		let possibilities = eyes > 0 ? Math.pow(6, (eyes + rerolls)) : 0;
		if (this.state.mordor === 'y') {                                              //If in Mordor
			this.setState({ 
				chanceOfDiscovery: 100 
			});
		} else if (eyes === 0) {
			this.setState({
				chanceOfDiscovery: 0
			})
		} else {
			let chance = (((possibilities - Math.round(   
				Math.pow(((5 - freePeoples) / 6), eyes + rerolls)
				* possibilities)) / possibilities) * 100).toFixed(2);
			this.setState({
				chanceOfDiscovery: chance
			})
		};
		this.quote();
	}

	quote() {
		let quote = quotes[Math.floor(Math.random() * quotes.length)];
		this.setState({ quote: quote });
	}

	render() {
		let eyes = this.generateDiceArray(9);
		let freePeoples = this.generateDiceArray(5);
		return (
			<Container className={'mainBackground'}>
				<Grid
					doubling={true}
					textAlign='center'
					verticalAlign='middle'
				>
					<Grid.Column width={1}/>
					<Grid.Column width={this.state.resize ? 12 : 6}>
						<Grid.Row>
							<NavBar />
						</Grid.Row>
						<Grid.Row style={{marginTop: '60px'}}>
							<Segment className='wotrHeaderBox' inverted={true}>
								<Header as='h1' className='wotrHeader'>Fellowship Calculator</Header>
								<Header.Subheader as='h3' className='wotrHeader'>A Tool for Use with War of The Ring, 2nd Ed.</Header.Subheader>
							</Segment>
						</Grid.Row>
						<Grid.Row style={{paddingBottom: '50px'}}>
							<Segment className='wotrForm' textAlign='center'>
								<Form widths='equal'>
									<Header as='h3' className='wotrSubheader' content='Fellowship in Mordor?'/>
									<Form.Group inline={true} style={{marginTop: '10px'}}>
										<Form.Radio 
											label='Yes'
											value={'y'}
											name='mordor'
											onChange={this.handleChange.bind(this)}
											checked={this.state.mordor === 'y' ? true : false}
										/>
										<Form.Radio 
											label='No'
											value={'n'}
											name='mordor'
											onChange={this.handleChange.bind(this)}
											checked={this.state.mordor === 'n' ? true : false}
										/>
									</Form.Group>
									<Form.Group inline={true}>
										<Header as='h3' className='wotrSubheader' content='Number of Eyes in Hunt Box:'/>
										<Form.Group className='diceNumber'>
											<Form.Select 
												style={{marginLeft: '20px'}}
												name='eyes'
												options={eyes} 
												value={this.state.eyes}
												onChange={this.handleChange.bind(this)}
											/> 
										</Form.Group>
										<Header as='h3' className='wotrSubheader' content='Number of Free Peoples Dice in Hunt Box:'/>
										<Form.Group className='diceNumber'>
											<Form.Select 
												style={{marginLeft: '20px'}}
												name='freePeoples'
												options={freePeoples} 
												value={this.state.freePeoples}
												onChange={this.handleChange.bind(this)}
												/> 
										</Form.Group>
									</Form.Group>
										<Header as='h4' className='wotrSubheader' content='Nazgul in Same Region as Fellowship?'/>
										<Form.Radio
											label='Yes'
											value={'y'}
											name='nazgul'
											onChange={this.handleChange.bind(this)}
											checked={this.state.nazgul === 'y' ? true : false}
										/>
										<Form.Radio
											label='No'
											value={'n'}
											name='nazgul'
											onChange={this.handleChange.bind(this)}
											checked={this.state.nazgul === 'n' ? true : false}
										/>
										<Header as='h4' className='wotrSubheader' content='Shadow Armies in Same Region as Fellowship?'/>
										<Form.Radio
											label='Yes'
											value={'y'}
											name='shadowArmies'
											onChange={this.handleChange.bind(this)}
											checked={this.state.shadowArmies === 'y' ? true : false}
										/>
										<Form.Radio
											label='No'
											value={'n'}
											name='shadowArmies'
											onChange={this.handleChange.bind(this)}
											checked={this.state.shadowArmies === 'n' ? true : false}
										/>
										<Header as='h4' className='wotrSubheader' content='Fellowship Revealed Moving Through Shadow Stronghold?'/>
										<Form.Radio
											label='Yes'
											value={'y'}
											name='shadowStronghold'
											onChange={this.handleChange.bind(this)}
											checked={this.state.shadowStronghold === 'y' ? true : false}
										/>
										<Form.Radio
											label='No'
											value={'n'}
											name='shadowStronghold'
											onChange={this.handleChange.bind(this)}
											checked={this.state.shadowStronghold === 'n' ? true : false}
										/>
									<Form.Group>
									</Form.Group>
									<Segment className='calculator'>
										<Header as='h3' className='wotrSubheader' content='Chance of Discovery'/>
										<Button secondary={true} content='Calculate' onClick={this.calculate.bind(this)}/>
										<Segment className={'calcDisplay'} content={`${this.state.chanceOfDiscovery}%`}></Segment>
										{this.state.quote && <Segment className={'quote'} content={`${this.state.quote.quote} - ${this.state.quote.author}`}/>}
									</Segment>
								</Form>
							</Segment>
						</Grid.Row>
					</Grid.Column>
					<Grid.Column width={1}/>
					<Grid.Row>
						<Footer />
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default WoTR_Calc;