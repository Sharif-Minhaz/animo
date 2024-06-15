import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// import { getCurrentUser } from "../lib/appwrite";

interface GlobalContextProps {
	isLogged: boolean;
	setIsLogged: (isLogged: boolean) => void;
	user: any;
	setUser: (user: any) => void;
	loading: boolean;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);
export const useGlobalContext = (): GlobalContextProps => {
	const context = useContext(GlobalContext);
	if (context === null) {
		throw new Error("useGlobalContext must be used within a GlobalProvider");
	}
	return context;
};

const GlobalProvider = ({ children }: { children: ReactNode }) => {
	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// getCurrentUser()
		// 	.then((res) => {
		// 		if (res) {
		// 			setIsLogged(true);
		// 			setUser(res);
		// 		} else {
		// 			setIsLogged(false);
		// 			setUser(null);
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	})
		// 	.finally(() => {
		// 		setLoading(false);
		// 	});
	}, []);

	return (
		<GlobalContext.Provider value={{ isLogged, setIsLogged, user, setUser, loading }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
