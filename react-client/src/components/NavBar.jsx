import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Menu 
				fixed='top' 
				inverted={true}
				size='large'
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
				</Menu.Menu>
			</Menu>
		)
	}
}

export default NavBar;