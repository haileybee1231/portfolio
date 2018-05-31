import React from 'react';
import { Header, Container, Grid, Form, Segment, Modal, Icon } from 'semantic-ui-react';
import validator from 'email-validator';
import axios from 'axios';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			subject: '',
			message: '',
			email: '',
			modalOpen: false,
			modalMessage: '',
			modalHeader: '',
			warningSign: false
		}
	}

	handleChange(e, { name, value }) {
		this.setState({ [name]: value })
	}
	
	handleSubmit(e) {
		let { name, subject, message, email } = this.state;
		if (name && message && validator.validate(email)) {
			e.preventDefault();
			axios.post('/email', {name: name, subject: subject ? subject : undefined, message: message, email: email })
			.then((res) => {
				this.setState({
					modalHeader: 'Message Submitted',
					modalMessage: `Thank you! I'll get back to you as soon as I can 😊`,
					modalOpen: true,
					warningSign: false,
					name: '',
					subject: '',
					message: '',
					email: ''
				});
			})
			.catch((err) => {
				console.error(err);
				this.setState({
					modalMessage: 'There was a problem submitting your message. Sorry! 😢',
					modalOpen: true,
					modalHeader: 'Submission Error',
					warningSign: true
				});
			})
		} else {
			if (!this.state.name) {
				this.setState({
					modalMessage: 'Please enter your name.'
				});
			} else if (!this.state.message) {
				this.setState({
					modalMessage: 'Please enter your message.'
				});
			} else if (!this.state.email || !validator.validate(email)) {
				this.setState({
					modalMessage: 'Please enter a valid email address.'
				});
			}
			this.setState({
				modalOpen: true,
				modalHeader: 'Submission Error',
				warningSign: true
			});
		}
		setTimeout(() => this.handleClose(), 3000);
	}

	handleClose() {
		this.setState({ modalOpen: false })
	}

	render() {
		const styles = {
			formHeader: {
				color: 'white'
			},
			nameInput: {
				width: '60%'
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
					<Segment className='contactForm' textAlign='center' style={{marginTop: '200px'}}>
						<Form onSubmit={this.handleSubmit.bind(this)}>
							<Header style={styles.formHeader} as='h1' content='Contact'/>
							<Header style={styles.formHeader} as='h2'>Email: <a href='mailto:haileybobella@gmail.com'> haileybobella@gmail.com</a></Header>
							<Header style={styles.formHeader} as='h2'>Phone: (908) 370-3986</Header>
							<Header style={styles.formHeader} as='h2'>All My Social Network Information Is in The Footer!</Header>
							<Header style={styles.formHeader} as='h2'>Or, You Can Drop Me A Line Directly:</Header>
							<Form.Input 
								name='name' 
								value={this.state.name} 
								type='text' 
								label='Name:'
								style={styles.nameInput}
								required={true}
								onChange={this.handleChange.bind(this)} 
							/>
							<Form.Input 
								name='subject' 
								value={this.state.subject} 
								type='text' 
								label='Subject:'
								style={styles.subjectInput}
								onChange={this.handleChange.bind(this)} 
							/>
							<Form.TextArea 
								name='message'
								value={this.state.message}
								label='Message:'
								style={{height: '300px'}}
								required={true}
								onChange={this.handleChange.bind(this)}
							/>
							<Form.Input 
								name='email'
								value={this.state.email}
								label='Your Email:'
								required={true}
								type='text'
								onChange={this.handleChange.bind(this)}
							/>
							<Form.Button inverted={true} content='Submit'/>
						</Form>
					</Segment>
					<Grid.Row>
						<Footer />
					</Grid.Row>
				</Grid>
				<Modal 
					closeIcon={true}
					open={this.state.modalOpen}
					dimmer='blurring' 
					size='mini'
					style={{textAlign: 'center', fontSize: '1.4rem'}}
					onClose={this.handleClose.bind(this)}
				>
					<Modal.Header>{this.state.warningSign && <Icon name='warning sign'/>}{this.state.modalHeader}</Modal.Header>
					<Modal.Content>{this.state.modalMessage}</Modal.Content>
				</Modal>
			</Container>
		)
	}
}

export default Contact;