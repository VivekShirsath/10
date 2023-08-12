import { useData } from "../context/DataContext"
import { NavLink } from "react-router-dom";

export const Department = () => {

    const {products,dispatch} = useData();

    const uniqueDepartments = products.reduce((uniqueDeps, item) => {
        if (!uniqueDeps.includes(item.department)) {
            uniqueDeps.push(item.department);
        }
        return uniqueDeps;
    }, []);

    const handleClick=(text) => {
        dispatch({type:"CHANGE_DEP",payload:text})
    }

    return(
        <div className="flex gap-4 p-4 justify-around w-screen">
            {
                uniqueDepartments?.map(item => 
                <NavLink to={"/dep/" + item} onClick={() =>handleClick(item)}>
                <div className="bg-slate-300 p-4 rounded-md cursor-pointer
                text-lg">{item}</div>
                </NavLink>)
            }
        </div>
    )
}