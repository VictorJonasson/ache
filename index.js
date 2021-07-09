/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import useGlobalState from "./src/store/useGlobalState";
import Context from "./src/store/context"

const Index = () =>{
    const store = useGlobalState()
    return(
        <Context.Provider value={store}>
            <App/>
        </Context.Provider>

    )
}


AppRegistry.registerComponent(appName, () => Index);
