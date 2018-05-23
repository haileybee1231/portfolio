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
      destination: null
    }
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.setState({ visible: true });

    let interval = setInterval(() => {
      this.setState({ visible: !this.state.visible });
    }, 3000);

    setTimeout(() => {
      this.setState({
        message: 'I\'m Hailey.',
        frame: this.state.frame += 1,
      });
    }, 5000);

    setTimeout(() => {
      this.setState({
        message: 'I like to make things.',
        className: 'secondWelcomeMessage',
        frame: this.state.frame += 1
      });
    }, 11000);

    setTimeout(() => {
      this.setState({
        message: 'I\'m a full-stack developer.',
        className: 'thirdWelcomeMessage',
        frame: this.state.frame += 1,
        destination: 'projects'
      });
    }, 17000);
    
    setTimeout(() => {
      this.setState({
        message: 'I play music.',
        frame: this.state.frame += 1,
        destination: 'music'
      });
    }, 23000);
    
    setTimeout(() => {
      this.setState({
        message: 'I\'m an advocate.',
        frame: this.state.frame += 1,
        destination: 'advocacy'
      });
    }, 29000);

    setTimeout(() => {
      this.setState({
        message: 'And I love to play games.',
        frame: this.state.frame += 1,
        destination: 'games'
      });
    }, 35000);

    setTimeout(() => {
      this.setState({
        message: 'Please take a look around!',
        className: 'fourthWelcomeMessage',
        frame: this.state.frame += 1,
        destination: null
      });
    }, 41000);

    setTimeout(() => {
      this.setState({
        animationComplete: true
      })
    }, 45000);

    setTimeout(() => {
      clearInterval(interval);
    }, 42000);
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
            <Transition visible={this.state.visible} animation='fade' duration={2000}>
              <Segment style={{ backgroundColor: 'black', textAlign:'center' }}>
                {this.state.frame < 3 || this.state.frame > 6
                  ? <Header as='h1' className={this.state.className}>{this.state.message}</Header>
                  : <Link to={`/${this.state.destination}`}>
                      <Header as='h1' className={this.state.className}>{this.state.message}</Header>
                    </Link>
                }
              </Segment>
            </Transition>
            <Transition visible={this.state.animationComplete} animation='fade up' duration={2000}>
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
