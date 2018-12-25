import React, { Component } from 'react';
import Card from './components/Card'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
	render() {
    	return (
			<Provider store={store}>
				<div className="container" style={{maxWidth: '370px', marginTop: '225px'}}>
					<Card />
				</div>
		  </Provider>
    	);
  	}
}


export default App
