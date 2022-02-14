import { createContext } from "react"

export interface InitialState{
    first:string;
    last:string;
}

const initialState:InitialState = {
    first:"ali",
    last:"salami",
}

const context = createContext<InitialState>(initialState)

export default context;