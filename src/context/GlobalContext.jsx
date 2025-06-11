import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

	const [ users, setUsers ] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3001/usuarios`)
		.then(response => response.json())
		.then(json => setUsers(json));
	}, [])

	return (
		<GlobalContext.Provider value={users}>
			{children}
		</GlobalContext.Provider>
	)
}