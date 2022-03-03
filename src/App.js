import { useEffect, useState } from 'react';
import './App.scss';

const url = 'https://api.thedogapi.com/v1/images/search?limit=5';

function App() {
	const [breeds, setBreeds] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
			setBreeds([...data]);
		})();
	}, []);

	return (
		<div className="App">
			{breeds.length > 0 && (
				<>
					<h1>Dog Breeds</h1>
					<p>There are {breeds.length} breeds.</p>
				</>
			)}
		</div>
	);
}

export default App;