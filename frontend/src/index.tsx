import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CuteCat from './components/CuteCat'
import CuteDog from './components/CuteDog'

ReactDOM.render(
	<React.StrictMode>
		<App />
		<CuteCat/>
		<CuteDog/>
	</React.StrictMode>,
	document.getElementById('root')
);
