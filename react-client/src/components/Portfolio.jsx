import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Project from './Project.jsx';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [
				{
					name: 'hexology',
					description: 'A hex-based strategy game you can play in the browser. Play live with friends or against an AI.',
					link: 'https://www.hexology-game.com',
					imageURL: './assets/images/hexology.png'
				},
				{
					name: 'hackXchange',
					description: 'Forum with point-based economy where developers can post coding questions and vote on solutions.',
					link: 'https://www.hackxchange.heroku-app.com',
					imageURL: './assets/images/hackxchange.png'
				},
				{
					name: 'grassroots',
					description: 'A tool for connecting voters with local politicians and election resources.',
					link: 'https://www.hr-grassroots.heroku-app.com',
					imageURL: './assets/images/grassroots.png'
				},
				{
					name: 'reCHORD',
					description: 'Visualizer for creating chord progressiosn and looking up guitar chords.',
					link: 'https://rechord-progression-builder.herokuapp.com/',
					imageURL: './assets/images/rechord.png'
				},
				{
					name: 'snake',
					description: 'A classic snake game, built with HTML Canvas.',
					link: '/projects/snake',
					imageURL: './assets/images/snake.png'
				},
			]
		}
	}

	render() {
		return (
			<Container className={'mainBackground'}>
				<Grid
					textAlign='center'
					verticalAlign='middle'
				>
					<Grid.Row>
						<NavBar />
					</Grid.Row>
					<Grid.Row style={{marginTop: '100px'}}>
						{this.state.projects.map((project, index) => {
							return <Project 
								key={index} 
								project={project}
							/>
						})}
					</Grid.Row>
					<Grid.Row>
						<Footer/>
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default Portfolio;