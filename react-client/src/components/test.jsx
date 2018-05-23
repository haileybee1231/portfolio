import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { exampleAction } from '../../actions/actions.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<h1>Hello World, this is a Redux tutorial!</h1>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		examplePropOne: state.examplePropOne,
		examplePropTwo: state.examplePropTwo,
	}
}

const mapDispatchToProps = (disptach) => {
	return bindActionCreators({ exampleAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);