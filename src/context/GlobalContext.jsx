import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

	const [ users, setUsers ] = useState(null);
	const [ vehicles, setVehicles ] = useState(null);
	const [ rentals, setRental ] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3001/users`)
		.then(response => response.json())
		.then(json => setUsers(json));
	}, [])

	useEffect(() => {
		fetch(`http://localhost:3001/vehicles`)
		.then(response => response.json())
		.then(json => setVehicles(json));
	}, []);

	useEffect(() => {
		fetch(`http://localhost:3001/rentals`)
		.then(response => response.json())
		.then(json => setRental(json));
	}, [])

	return (
		<GlobalContext.Provider value={{ users, vehicles, rentals }}>
			{children}
		</GlobalContext.Provider>
	)
}