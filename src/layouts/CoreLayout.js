import React from 'react';
import { Link } from 'react-router';
class CoreLayout extends React.Component {

	static propTypes = {
		children: React.PropTypes.element
	}
	render() {
		console.log('Inside Core Layout render method')

		return (
			<div>
				<span>
					Links: Links:<Link to='/register'>Register</Link>
					<Link to='/login'>Login</Link> |
			<Link to='/'>Home Page</Link>
				</span>
				<br />
				{this.props.children}
			</div>
		);
	}
}
export default CoreLayout;
