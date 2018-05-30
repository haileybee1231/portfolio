import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Grid } from 'semantic-ui-react';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mobileOpen: false
		}
	}

	mobileDeviceCheck() {
		return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)
	}

	mobileMenuToggle() {
		this.setState({
			mobileOpen: !this.state.mobileOpen
		})
	}

	render() {
		const styles = {
			item: {
				fontSize: '3rem',
			}
		}
		if (!this.mobileDeviceCheck()) {
			return (
				<Menu
					fixed='top'
					inverted={true}
					size='huge'
					style={{ minHeight: '40px' }}
					stackable={true}
				>
					<Link to='/'>
						<Menu.Item link={true}>Home</Menu.Item>
					</Link>
					<Menu.Menu position='right'>
						<Link to='/projects'>
							<Menu.Item
								link={true}
								position='right'
							>
								Projects
							</Menu.Item>
						</Link>
						<Link to='/music'>
							<Menu.Item
								link={true}
								position='right'
							>
								Music
							</Menu.Item>
						</Link>
						<Link to='/advocacy'>
							<Menu.Item
								link={true}
								position='right'
							>
								Advocacy
							</Menu.Item>
						</Link>
						<Link to='games'>
							<Menu.Item
								link={true}
								position='right'
							>
								Games
							</Menu.Item>
						</Link>
						<Link to='contact'>
							<Menu.Item
								link={true}
								position='right'
							>
								Contact
							</Menu.Item>
						</Link>
					</Menu.Menu>
				</Menu>
			)
		} else {
			return (
				<Menu
					fixed='top'
					inverted={true}
					stackable={true}
				>
					<Link to='/'>
						<Menu.Item link={true} style={styles.item}>Home</Menu.Item>
					</Link>
					{this.state.mobileOpen ? 
						<Menu 
							vertical={true} 
							inverted={true} 
							fixed='right'
							size='massive'
							style={{height: 'auto'}}
						>
							<Menu.Item icon={true} position='right'>
								<Icon
									name='bars'
									size='huge'
									inverted={true}
									onClick={this.mobileMenuToggle.bind(this)}
								/>
							</Menu.Item>
							<Link to='/projects'>
								<Menu.Item
									link={true}
									style={styles.item}
								>
									Projects
								</Menu.Item>
							</Link>
							<Link to='/music'>
								<Menu.Item
									link={true}
									style={styles.item}
								>
									Music
								</Menu.Item>
							</Link>
							<Link to='/advocacy'>
								<Menu.Item
									link={true}
									style={styles.item}
								>
									Advocacy
								</Menu.Item>
							</Link>
							<Link to='games'>
								<Menu.Item
									link={true}
									style={styles.item}
								>
									Games
								</Menu.Item>
							</Link>
							<Link to='contact'>
								<Menu.Item
									link={true}
									style={styles.item}
								>
									Contact
								</Menu.Item>
							</Link>
						</Menu>
						: <Menu.Item icon={true} position='right'>
							<Icon
								name='bars'
								size='huge'
								inverted={true}
								onClick={this.mobileMenuToggle.bind(this)}
							/>
						</Menu.Item>
					}
				</Menu>
			)
		}
	}
}

export default NavBar;