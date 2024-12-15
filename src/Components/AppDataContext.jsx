import { createContext, useState } from "react";

// Create the context
export const AppDataContext = createContext();

const AppDataProvider = ({ children }) => {
    const [watchlistMovies, setWatchlists] = useState([]);

    return (
        // Use the context's Provider here
        <AppDataContext.Provider value={{ watchlistMovies, setWatchlists }}>
            {children}
        </AppDataContext.Provider>
    );
};

export default AppDataProvider;