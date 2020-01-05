import React from 'react';

class App extends React.Component {
	render() {

		console.log('env ', process.env.API_URL);
		return (
			<h1>App loaded</h1>
		);
	}
}

export default App;