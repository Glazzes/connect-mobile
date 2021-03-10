import React, { useState, createContext } from 'react';
import { ApplicationState } from '../models/ApplicationState';

const initalApplicationState: ApplicationState = {
    isLoggedIn: false,
    user: {
        id: 0,
        username: '',
    },
};

interface ApplicationContext {
    globalState: ApplicationState;
    setGlobalState: React.Dispatch<React.SetStateAction<ApplicationState>>;
}

export const GlobalContext = createContext<ApplicationContext>(
    {} as ApplicationContext,
);

const Store: React.FC = ({ children }) => {
    const [globalState, setGlobalState] = useState<ApplicationState>(
        initalApplicationState,
    );

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Store;