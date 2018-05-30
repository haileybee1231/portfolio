import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const Contact = (props) => {
	return (
		<Container className={'mainBackground'}>
			<Grid
				textAlign='center'
				verticalAlign='middle'
			>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		</Container>
	)
}

export default Contact;