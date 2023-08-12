import { NavLink } from "react-router-dom"
import { useData } from "../context/DataContext"

export const SideBar = () => {
    const {dispatch} = useData();
    const handleClick=(text) => {
        dispatch({type:"CHANGE_DEP",payload:text})
    }
    return(
        <div className="h-screen bg-gray-900 text-white p-7 flex flex-col
        gap-10">
            <NavLink to="/"><div>Dashboard</div></NavLink>
            <NavLink to="/department"><div>Departments</div></NavLink>
            <NavLink to="/dep/all" onClick={() => handleClick("All")}><div>Products</div></NavLink>
        </div>
    )
}