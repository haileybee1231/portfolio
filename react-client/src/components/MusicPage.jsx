import React from 'react';
import { Header, Container, Grid, Image, Segment, Transition, Icon} from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class MusicPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: ['./assets/images/little_thief.jpg',
				'./assets/images/little_thief_gender_unbound.jpg',
				'./assets/images/little_thief_the_q.jpg',
				'./assets/images/little_thief_live.jpg',
				'./assets/images/little_thief_audubon.jpg'],
			currentImage: 0,
			transition: false
		}
	}

	componentDidMount() {
		this.startCarousel();
	}

	startCarousel(flag) {
		!flag && this.setState({ transition: true })

		window.changeInterval = setInterval(() => {
			let { currentImage, images} = this.state;
			this.setState({
				transition: false
			});
			setTimeout(() => {
				this.setState({
					currentImage: currentImage < images.length - 1 ? currentImage + 1 : 0
				})
			}, 1000);
			setTimeout(() => {
				this.setState({
					transition: true
				})
			}, 1500)
		}, 4000)
	}

	changeImage(prev) {
		this.setState({ transition: true });
		clearInterval(window.changeInterval);

		let { currentImage, images } = this.state
		console.log(prev, currentImage, images.length)
		this.setState({
			currentImage: prev
				? currentImage === 0 
					? images.length - 1 
						: currentImage - 1
					: currentImage < images.length - 1 
					? currentImage + 1 
						: 0
		});

		this.startCarousel(true);
	}

	render() {
		const styles = {
			carousel: {
				position: 'relative',
				margin: 'auto',
				marginTop: '2%',
				backgroundColor: 'grey',
				width: 'auto',
			},
			image: {
				height: '600px',
				margin: 'auto',
			},
			left: {
				color: 'white',
				cursor: 'pointer',
				position: 'absolute',
				left: '15px',
				bottom: '280px'
			},
			right: {
				color: 'white',
				cursor: 'pointer',
				position: 'absolute',
				right: '15px',
				bottom: '280px'
			},
			iframeEmbed: {
				border: '0',
				width: '350px',
				height: '687px',
				paddingTop: '30px'
			},
			box: { 
				maxWidth: '800px' ,
				borderRadius: '50px',
				marginBottom: '50px'
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
					<Grid.Row>
						<Container style={styles.carousel}>
							<Transition 
								visible={this.state.transition} 
								duration={1000} 
								animation='fade'
							>
								<Image style={styles.image} src={this.state.images[this.state.currentImage]} />
							</Transition>
							<Icon size='huge' onClick={() => this.changeImage(true)} style={styles.left} name='chevron left'/>
							<Icon size='huge' onClick={() => this.changeImage()} style={styles.right} name='chevron right'/>
						</Container>
					</Grid.Row>
					<Grid.Row>
						<Segment 
							textAlign='center' 
							inverted={true} 
							style={styles.box}
						>
							<Header as='h1' content='Little Thief'/>
							<Header as='h2'>
								<em>
									<Icon name='quote left' />&nbsp;Little Thief is one of Austin's most emotionally raw and contemplative new artists, creating disarming bedroom pop featuring her etheral voice over simple percussion, unexpected bursts of electric gutiar and cello.&nbsp; 
									<Icon name='quote right' />
								</em>
							</Header>
							<Header as='h3'><a href='http://ovrld.com/interviews/little-thief-interview/' target='_blank'>-Ovrld</a></Header>
							<Header as='h4'>Music has always been a great source of catharsis for me. I grew up playing the cello, and began guitar when I turend fourteen. Since then, I have played in various bands and composed my own music. <a href='https://www.facebook.com/littlethief4/' target='_blank'>Little Thief</a> is my first concerted solo effort.</Header>
							<Header as='h4'>I recorded, mixed, and produced all the sounds on my debut, <em>It Didn't End, Tomrorow Came</em> in late 2016. I'm always writing more, and my sophomore effort will be released later this year.</Header>
							<iframe
								style={styles.iframeEmbed}
								src="https://bandcamp.com/EmbeddedPlayer/album=1880603118/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
								seamless
							>
								<a href="http://little-thief.bandcamp.com/album/it-didnt-end-tomorrow-came" target='_blank'>
									It Didn&#39;t End, Tomorrow Came by Little Thief
								</a>
							</iframe>
						</Segment>
					</Grid.Row>
					<Grid.Row>
						<Footer />
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default MusicPage;