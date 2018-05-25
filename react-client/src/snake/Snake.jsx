import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

import { snakeScript } from './scripts.js';

class Snake extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		snakeScript();
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
					<Grid.Row style={{ marginTop: '100px' }}>
						<canvas 
							id='canvas' 
							width='450' 
							height='450'
						/>
					</Grid.Row>
					<Grid.Row>
						<Footer />
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default Snake;