import { useContext, createContext } from 'react'

const AppContext = createContext({
    mode: 'dark'
})

export {useContext, AppContext}