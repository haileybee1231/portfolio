import React from 'react';
import { Image, Container, Grid, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Games extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ resize: window.innerWidth <= 1600 })
		this.setState({ mobile: window.innerWidth <= 1000 })
	}

	render() {
		const styles = {
			segment: {
				margin: 'auto',
				marginTop: this.state.resize ? this.state.mobile ? '20%' : '10%' : '5%',
				textAlign: 'center',
				borderRadius: '50px',
				width: this.state.resize ? this.state.mobile ? '90%' : '80%' : '55%',
				paddingRight: '5%',
				paddingLeft: '5%'
			},
			p: {
				fontSize: this.state.mobile ? '2.0rem' : '1.4rem',
				textAlign: 'justify',
			},
			image: {
				width: '200px',
				marginTop: '300px',
				marginBottom: '100px',
			},
			right: {
				width: '200px',
				marginTop: '50px',
				marginBottom: '100px',
				marginLeft: '23%',
			},
			left: {
				width: '200px',
				marginTop: '50px',
				marginBottom: '100px',
				marginLeft: '10%'
			},
			right1: {
				width: '200px',
				marginTop: '50px',
				marginBottom: '100px',
				marginLeft: '25%',
			},
			left1: {
				width: '200px',
				marginTop: '50px',
				marginBottom: '100px',
				marginLeft: '15%'
			},
		}
		return (
			<Container className={'mainBackground'}>
				<Grid
					textAlign='center'
					verticalAlign='middle'
				>
					<Grid.Row>
						<NavBar />
					</Grid.Row>
					<Container>
						{(!this.state.mobile && !this.state.resize) && <Image style={styles.image} src='./assets/images/hollow_knight.jpg' floated='left' />}
						{(!this.state.mobile && !this.state.resize) && <Image style={styles.image} src='./assets/images/scythe.jpeg' floated='right' />}
						<Segment inverted={true} style={styles.segment}>
							<Header content='Games' as='h1' />
							<p style={styles.p}>Games are a uniquely expressive medium.</p>
							<p style={styles.p}>Whether in video games or board games, much of the most revolutionary and fascinating work currently happening in art, culture,
							and technology is the result of trying to tailor new and engaging interactive experiences.</p>
							<p style={styles.p}>I am very <Link to='/contact'>interested</Link> in positions at video and board game companies. I recently built 
							<a href='https://hexology-game.com' target='_blank'> a strategy game </a>that includes a hand-built, rudimentary AI and a procedural generation 
							algorithm, as well as complex player interactions and combat scripting. I would love to learn and build more, and am currently learning Unity 
							and C# programming.</p>
							<Grid columns={2}>
								<Grid.Column>
									<p style={styles.p}>Video games I like: </p>
									<ul>
										<li>Dark Souls</li>
										<li>Bloodborne</li>
										<li>Hollow Knight</li>
										<li>Breath of The Wild</li>
										<li>Warcraft III</li>
										<li>Pathologic</li>
									</ul>
								</Grid.Column>
								<Grid.Column>
									<p style={styles.p}>Tabletop games I like: </p>
									<ul>
										<li>War of The Ring, 2nd Ed.</li>
										<li>Bloodborne</li>
										<li>Scythe</li>
										<li>Onitama</li>
										<li>Kingdom Death</li>
										<li>Dungeons & Dragons 5e</li>
									</ul>
								</Grid.Column>
							</Grid>
						</Segment>
						{this.state.mobile && <img style={styles.left} src='./assets/images/hollow_knight.jpg' />}
						{this.state.mobile && <img style={styles.right} src='./assets/images/scythe.jpeg' />}
						{(this.state.resize && !this.state.mobile) && <img style={styles.left1} src='./assets/images/hollow_knight.jpg' />}
						{(this.state.resize && !this.state.mobile) && <img style={styles.right1} src='./assets/images/scythe.jpeg' />}
					</Container>
					<Grid.Row>
						<Footer />
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default Games;