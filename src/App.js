import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {



	// each time we click a button, we call store.dispatch({ type: 'INCREASE_COUNT' })
	//and somehow this is hitting our reducer. So things are happening.
	handleOnClick = event => {
		this.props.increaseCount();
	};

	render() {
		console.log(this.props);// this will return the state as props and the actions as props
		//{items: Array(0), increaseCount: ƒ}
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.items
	};
};

const mapDispatchToProps = dispatch => {
	return {
increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
