import React from 'react';
import { Container, Grid, Segment, Button, Icon } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Resume extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scale: 1
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize(true);
	}
	
	zoom(direction) {
		if (direction === '+') {
			this.setState({
				scale: this.state.scale += 0.1
			})
		} else if (direction === '-') {
			this.setState({
				scale: this.state.scale -= 0.1
			})
		}
	}

	resize(flag) {
		this.setState({ resize: window.innerWidth <= 1200 });
		flag && this.setState({ scale: 1 });
	}

	render() {
		const styles = {
			segment: { 
				height: '65px', 
				marginTop: this.state.resize ? '140px' : '40px', 
				marginBottom: '-35px' 
			}
		}
		return (
			<Container className={'mainBackground'}>
				<Grid
					textAlign='center'
					verticalAlign='middle'
					columns={3}
				>
					<Grid.Row>
						<NavBar />
					</Grid.Row>
					<Grid.Row>
						<Segment style={styles.segment}>
							<Grid columns={'equal'}>
								<Grid.Column>
									<Button onClick={() => this.zoom('-')}>-</Button>
								</Grid.Column>
								<Grid.Column>
									<Button onClick={() => this.zoom('+')}>+</Button>
								</Grid.Column>
								<Grid.Column verticalAlign='middle'>
									<a href='./assets/hailey_bobella_resume.pdf' download>
										<Icon
											name='download'
											bordered={true}
											link={true}
										/>
									</a>
								</Grid.Column>
							</Grid>
						</Segment>
					</Grid.Row>
					<Grid.Row style={{marginTop: '5vh' }}>
							<Document file='./assets/hailey_bobella_resume.pdf' loading={<Icon name='spinner' loading={true} />}>
							<Page pageNumber={1} scale={this.state.scale} maxScale={1.8} />
						</Document>
					</Grid.Row>
					<Grid.Row>
						<Footer />
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default Resume;
