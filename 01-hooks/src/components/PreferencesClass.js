import React, { Component } from 'react';

class PreferencesClass extends Component {
	state = {
		counter: 0,
		darkTheme: false,
	}

	render() {
		return (
			<div>
				<p>Count: {this.state.counter}</p>
				<button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
				<button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>

				<p>Dark Theme Active?: {this.state.darkTheme ? 'YAS!' : 'nope, too bright'}</p>
				<button onClick={() => this.setState({ darkTheme: !this.state.darkTheme })}>Change theme</button>
			</div>
		);
	}
}

export default PreferencesClass;
