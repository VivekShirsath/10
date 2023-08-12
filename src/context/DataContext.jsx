
import { createContext,useContext,useReducer,useEffect} from "react";
import { inventoryData } from "../data";
import { reducer } from "../reducer";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,{
        products : JSON.parse(localStorage.getItem("products")) ?
        JSON.parse(localStorage.getItem("products")) : inventoryData,
        category : JSON.parse(localStorage.getItem("category")) ?
        JSON.parse(localStorage.getItem("category")) : "All",
        low : JSON.parse(localStorage.getItem("low")) ?
        JSON.parse(localStorage.getItem("low")) :false,
        sort : JSON.parse(localStorage.getItem("sort")) ?
        JSON.parse(localStorage.getItem("sort")):"name"

    })

    // useEffect(() => {
    //     localStorage.setItem("products",JSON.stringify(
    //         [...state.products,]
    //     ))
    //   },[products])
    return(
        <DataContext.Provider value={{...state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)

