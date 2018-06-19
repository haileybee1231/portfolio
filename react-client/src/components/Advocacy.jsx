import React from 'react';
import { Container, Grid, Segment, Header, Image } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Advocacy extends React.Component {
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
				marginBottom: '100px'
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
						{(!this.state.mobile && !this.state.resize) && <Image href='http://www.safeaustin.org/' style={styles.image} src='./assets/images/safe.jpg' floated='left' />}
						{(!this.state.mobile && !this.state.resize) && <Image href='http://www.wehealny.org/services/bi_socialwork/VictimServices/Volunteer_Opportunities.html' style={styles.image} src='./assets/images/mountsinai.png' floated='right'/>}
						<Segment inverted={true} style={styles.segment}>
							<Header content='Sexual Assault Advocacy' as='h1'/>
							<p style={styles.p}>I am passionate about achieving equality for women, racial minorities, the LBGTQ+ community, and other 
							marginalized populations. The most direct way I enact that in my own life is through my work as a sexual assault advocate.</p>
							<p style={styles.p}>Over the last several years, first at Mount Sinai Beth Israel Hospital in New York City and now at The 
							SAFE Alliance in Austin, I have volunteered in a direct support role providing guidance and emotional support to survivors 
							in the hours directly after an assault.</p>
							<p style={styles.p}>Sexual violence is an endemic societal problem that affects people of all age groups, abilities, racial 
							backgrounds, genders, sexualities, religions, and levels of wealth. It is, however, most debilitating for those who are already
							face disadvantages in these areas.</p>
							<p style={styles.p}>It is my hope that by helping survivors regain autonomy in the face of violence and educating my
							community on the unbalanced power structures that lead to that violence that I can help pave the way for a world in which all people
							can be free from inequality and persecution.</p>
						</Segment>
						{this.state.mobile && <Image href='http://www.safeaustin.org/' style={styles.left} src='./assets/images/safe.jpg'/>}
						{this.state.mobile && <Image href='http://www.wehealny.org/services/bi_socialwork/VictimServices/Volunteer_Opportunities.html' style={styles.right} src='./assets/images/mountsinai.png'/>}
						{(this.state.resize && !this.state.mobile) && <Image href='http://www.safeaustin.org/' style={styles.left1} src='./assets/images/safe.jpg'/>}
						{(this.state.resize && !this.state.mobile) && <Image href='http://www.wehealny.org/services/bi_socialwork/VictimServices/Volunteer_Opportunities.html' style={styles.right1} src='./assets/images/mountsinai.png'/>}
					</Container>
					<Grid.Row>
						<Footer />
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default Advocacy;