import { useEffect, useState } from 'react';
import './App.scss';
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

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

	const getBreedName = (dog) => {
		if (dog.breeds.length === 0) {
			return '(no breed information)';
		} else {
			return dog.breeds[0].name;
		}
	}

	return (
		<div className="App">
			{dogs.length > 0 && (
				<>
					<h1>Dog Breeds</h1>
					<p>There are {dogs.length} dogs.</p>
					<Flex className="container" color='white' flexWrap='wrap'>
						{dogs.map((dog, index) => {
							return (
								<Box key={index} className="dog" w='100%' p={2}>
									<h3>{getBreedName(dog)}</h3>
									<img src={dog.url} alt="dog" />
								</Box>
							)
						})}
					</Flex>
				</>
			)}
		</div>
	);
}

export default App;