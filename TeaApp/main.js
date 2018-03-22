
'use strict';

import React, { Component } from 'react';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import Navigation from './src/lib/navigator';


global.startTime = new Date();


class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {modalVisible: true};
	  }
	componentWillMount() {

	}

	async componentDidMount() {
	
	}

	componentWillUnmount(){

	}


	render() {	
		return (
			<Navigation />
		)
	}
}

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default Root;
