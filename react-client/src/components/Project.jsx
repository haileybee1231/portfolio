import React from 'react';
import { Segment, Header, Image, Icon } from 'semantic-ui-react';

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
				<a href={project.link} target={project.openInNewTab ? '_blank' : null}>
					<Header as='h3'>{project.name}</Header>
				</a>
				<Header.Subheader style={styles.subheader}>{project.description}</Header.Subheader>
				<a href={project.link} target={project.openInNewTab ? '_blank' : null}>
					<Image style={{margin: 'auto'}} height='350px' src={project.imageURL}/>
				</a>
				<a href={project.githubURL} target='_blank'>
					<Icon name='github' size='big' link={true}/>
				</a>
			</Segment>
		)
	}
}

export default Project;