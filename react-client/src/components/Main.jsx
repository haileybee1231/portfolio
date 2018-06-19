import React from 'react';
import { Container, Header, Grid, Segment, Transition, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      message: 'Hi!',
      className: 'welcome',
      visible: false,
      frame: 0,
      animationComplete: false,
      destination: null,
    }
    this.timeouts = [];
  }

  componentDidMount() {
    setTimeout(() => this.animate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(window.interval);
    this.timeouts.forEach(timeout => clearTimeout(timeout))
  }

  animate() {
    this.setState({ visible: true });

    window.interval = setInterval(() => {
      this.setState({ visible: !this.state.visible });
    }, 2000);
    
    let timeout1 = setTimeout(() => {
      this.setState({
        message: 'I\'m Hailey.',
        frame: this.state.frame += 1,
      });
    }, 4000);

    let timeout2 = setTimeout(() => {
      this.setState({
        message: 'I like to make things.',
        className: 'secondWelcomeMessage',
        frame: this.state.frame += 1
      });
    }, 8000);

    let timeout3 = setTimeout(() => {
      this.setState({
        message: 'I\'m a full-stack developer.',
        className: 'thirdWelcomeMessage',
        frame: this.state.frame += 1,
        destination: 'projects'
      });
    }, 12000);
    
    let timeout4 = setTimeout(() => {
      this.setState({
        message: 'I play music.',
        frame: this.state.frame += 1,
        destination: 'music'
      });
    }, 16000);
    
    let timeout5 = setTimeout(() => {
      this.setState({
        message: 'I\'m an advocate.',
        frame: this.state.frame += 1,
        destination: 'advocacy'
      });
    }, 20000);

    let timeout6 = setTimeout(() => {
      this.setState({
        message: 'And I love to play games.',
        frame: this.state.frame += 1,
        destination: 'games'
      });
    }, 24000);

    let timeout7 = setTimeout(() => {
      this.setState({
        message: 'Please take a look around!',
        className: 'fourthWelcomeMessage',
        frame: this.state.frame += 1,
        destination: null
      });
    }, 28000);

    let timeout8 = setTimeout(() => {
      this.setState({
        animationComplete: true
      })
    }, 30000);

    let timeout9 = setTimeout(() => {
      clearInterval(interval);
    }, 29000);

    this.timeouts.push(timeout1, timeout2, timeout3, timeout4, timeout5, timeout6, timeout7, timeout8, timeout9)
  }

  resetAnimation() {
    this.setState({
      animationComplete: false,
      visible: false
    })
  }

  render() {
    return (
      <Container className={'mainBackground'}>
        <Grid 
          textAlign='center' 
          verticalAlign='middle'
        >
          <Grid.Row>
            <NavBar/>
          </Grid.Row>
          <Grid.Row style={{marginTop: '30vh'}}>
            <Transition visible={this.state.visible} animation='fade' duration={1000}>
              <Segment style={{ backgroundColor: 'black', textAlign:'center' }}>
                {this.state.frame < 3 || this.state.frame > 6
                  ? <Header as='h1' className={this.state.className}>{this.state.message}</Header>
                  : <Link to={`/${this.state.destination}`}>
                      <Header as='h1' className={this.state.className}>{this.state.message}</Header>
                    </Link>
                }
              </Segment>
            </Transition>
          </Grid.Row>
          <Grid.Row>
            <Transition visible={this.state.animationComplete} animation='fade up' duration={1000}>
              <Button 
                onClick={() => {
                  this.resetAnimation()
                  setTimeout(() => {
                    this.setState({
                      message: 'Hi!',
                      className: 'welcome',
                      frame: 0,
                      destination: null
                    })
                    this.animate();
                  }, 2000)
                }} 
                basic={true}
              >
              Repeat Animation
              </Button>
            </Transition>
          </Grid.Row>
          <Grid.Row>
            <Footer/>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Main;
