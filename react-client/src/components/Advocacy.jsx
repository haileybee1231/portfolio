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

	render() {
		const styles = {
			segment: { 
				margin: 'auto', 
				marginTop: '50px', 
				textAlign: 'center', 
				borderRadius: '50px', 
				width: '55%',
				paddingRight: '80px',
				paddingLeft: '80px'
			},
			p: { 
				fontSize: '1.4rem', 
				textAlign: 'justify'
			},
			image: {
				width: '200px',
				marginTop: '300px'
			}
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
						<Image href='http://www.safeaustin.org/' style={styles.image} src='./assets/images/safe.jpg' floated='left'/>
						<Image href='http://www.wehealny.org/services/bi_socialwork/VictimServices/Volunteer_Opportunities.html' style={styles.image} src='./assets/images/mountsinai.png' floated='right'/>
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