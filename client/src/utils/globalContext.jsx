//usecontext, usereducer, createcontext
import { createContext, useReducer, useContext } from "react";
import reducer from './reducer'

//create a context
const GlobalContext = createContext();
const { Post } = GlobalContext;

//create custom provider
export const GlobalPost = (props) => {
    // create some state with useReducer
    const [state, dispatch] = useReducer( reducer, {
        posts: []
    })
    // pass the state to the context provider's value prop
    return <Post value={[state, dispatch]}{...props}/>
}

// create a hook so that components can consume the context data
export const useGlobalPost=() => useContext(GlobalContext)