import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Project from './Project.jsx';

import { projects } from '../../dist/assets/projects/projects.js';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: projects
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