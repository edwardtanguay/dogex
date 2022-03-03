import { useEffect, useState } from 'react';
import './App.scss';

const url = 'https://api.thedogapi.com/v1/images/search?limit=5';

function App() {
	const [dogs, setDogs] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
			setDogs([...data]);
		})();
	}, []);

	return (
		<div className="App">
			{dogs.length > 0 && (
				<>
					<h1>Dog Breeds</h1>
					<p>There are {dogs.length} dogs.</p>
					<div className="dogs">
						{dogs.map((dog, index) => {
							return (
								<div className="dog" key={index}>
								<img src={dog.url} alt="dog" />
								</div>
							)
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default App;