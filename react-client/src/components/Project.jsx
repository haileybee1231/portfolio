import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react';

class Project extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		const { project } = this.props;
		const styles = {
			subheader: {
				color: 'grey',
				paddingBottom: '10px'
			},
			segment: {
				margin: 'auto',
				marginBottom: '50px',
				width: '40%',
				minWidth: '700px'
			}
		}
		return (
			<Segment style={styles.segment}>
				<a href={project.link}>
					<Header as='h3'>{project.name}</Header>
				</a>
				<Header.Subheader style={styles.subheader}>{project.description}</Header.Subheader>
				<a href={project.link}>
					<Image style={{margin: 'auto'}} height='350px' src={project.imageURL}/>
				</a>
			</Segment>
		)
	}
}

export default Project;