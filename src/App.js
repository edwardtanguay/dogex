import { useEffect, useState } from 'react';
import './App.scss';

const url = 'https://api.thedogapi.com/v1/images/search?limit=5';

function App() {

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Dog Breeds</h1>
		</div>
	);
}

export default App;