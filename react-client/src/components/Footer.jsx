import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const Footer = props => (
	<Menu
		fixed='bottom' 
		inverted={true}
		icon={true}
		>
		<Menu.Menu position='left'>
			<Menu.Item>
				<a href='https://www.linkedin.com/in/haileybobella/'>
					<Icon
						size='big'
						link={true}
						name='linkedin square'
					/>
				</a>
			</Menu.Item>
			<Menu.Item>
				<a href='https://github.com/haileybee1231'>
					<Icon
						size='big'
						link={true}
						name='github'
					/>
				</a>
			</Menu.Item>
			<Menu.Item>
				<a href='https://medium.com/@haileyjanebobella'>
					<Icon
						size='big'
						link={true}
						name='medium'
					/>
				</a>
			</Menu.Item>
				<a href='https://www.facebook.com/hailey.bobella'>
			<Menu.Item>
					<Icon
						size='big'
						link={true}
						name='facebook square'
					/>
			</Menu.Item>
				</a>
		</Menu.Menu>
		<Menu.Item position='right'>
		&copy; 2018 &mdash; Hailey Bobella
		</Menu.Item>
	</Menu>
)

export default Footer;