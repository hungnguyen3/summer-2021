import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CutePet from './components/CutePet';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<CutePet pet_type="dog" />
		<CutePet pet_type="cat" />
	</React.StrictMode>,
	document.getElementById('root')
);
