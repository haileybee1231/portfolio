import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = props => (
	<Menu
		fixed='bottom' 
		inverted={true}
		icon={true}
		>
		<Menu.Menu position='left'>
			<a href='https://www.linkedin.com/in/haileybobella/'>
				<Menu.Item>
					<Icon
						size='big'
						link={true}
						name='linkedin square'
					/>
				</Menu.Item>
			</a>
			<a href='https://github.com/haileybee1231'>
				<Menu.Item>
					<Icon
						size='big'
						link={true}
						name='github'
					/>
				</Menu.Item>
			</a>
			<a href='https://medium.com/@haileyjanebobella'>
				<Menu.Item>
					<Icon
						size='big'
						link={true}
						name='medium'
					/>
				</Menu.Item>
			</a>
			<a href='https://www.facebook.com/hailey.bobella'>
				<Menu.Item>
					<Icon
						size='big'
						link={true}
						name='facebook square'
					/>
				</Menu.Item>
			</a>
			<Link to='/resume'>
				<Menu.Item>
					<Icon
						size='big'
						link={true}
						name='file text'
					/>
				</Menu.Item>
			</Link>
		</Menu.Menu>
		<Menu.Item position='right'>
			&copy; 2018 &mdash; Hailey Bobella
		</Menu.Item>
	</Menu>
)

export default Footer;