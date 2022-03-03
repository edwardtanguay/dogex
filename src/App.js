import { useEffect, useState } from 'react';
import './App.scss';
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const url = 'https://api.thedogapi.com/v1/images/search?limit=5';

function App() {
	const [dogs, setDogs] = useState([]);
	const [page, setPage] = useState('main');

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

	const togglePage = () => {
		const _page = page === 'main' ? 'details' : 'main';
		setPage(_page);
	}

	return (
		<div className="App">
			{dogs.length > 0 && (
				<>
					<h1>Dog Breeds</h1>
					<p>There are {dogs.length} dogs.</p>

					{/* MAIN PAGE */}
					{page === 'main' && (
						<Flex className="container" color='white' flexWrap='wrap'>
							{dogs.map((dog, index) => {
								return (
									<Box key={index} className="dog" w='100%' p={2}>
										<h3 onClick={togglePage}>{getBreedName(dog)}</h3>
										<img src={dog.url} alt="dog" />
									</Box>
								)
							})}
						</Flex>
					)}

					{/* DETAILS PAGE */}
					{page === 'details' && (
						<div>details page
							<Button className="returnButton" onClick={togglePage} colorScheme='blue'>Return</Button>
						</div>
					)}

				</>
			)}
		</div>
	);
}

export default App;