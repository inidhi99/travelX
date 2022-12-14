//usecontext, usereducer, createcontext
import { createContext, useReducer, useContext } from "react";
import {reducer} from './reducer'

//create a context
const GlobalContext = createContext();
const { Provider } = GlobalContext;

//create custom provider
export const GlobalProvider = (props) => {
    // create some state with useReducer
    const [state, dispatch] = useReducer( reducer, {
        posts: [],
        comments: [],
        reactions: [],
    })
    // pass the state to the context provider's value prop
    return <Provider value={[state, dispatch]}{...props}/>
}

// create a hook so that components can consume the context data
export const useGlobalContext =() => useContext(GlobalContext)