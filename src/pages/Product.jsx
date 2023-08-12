
import { useData } from "../context/DataContext"
import { List } from "../components/List";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Product = () => {
    const {name} = useParams();
    const {products,category,sort,low,dispatch} = useData();
    const uniqueDepartments = products.reduce((uniqueDeps, item) => {
        if (!uniqueDeps.includes(item.department)) {
            uniqueDeps.push(item.department);
        }
        return uniqueDeps;
    }, []);

    const filterByCategory = category == "All" ? products : products.filter((item) => item.department
    == category);


    const filterByLowStocks = low ? filterByCategory.filter((item) => item.stock <= 10) : filterByCategory;
    
    const sortingProducts = sort == "name" ? [...filterByLowStocks].sort((a,b) => a.name.localeCompare(b.name))
    :filterByLowStocks;
   console.log(sort)
    const sortByPrice = sort == "price" ? [...sortingProducts].sort((a,b) => a.price 
    - b.price) :
    sortingProducts;
    const sortByStocks = sort == "stock"? [...sortByPrice].sort((a,b) => a.stock 
    - b.stock) :
    sortByPrice;
    

    return(
        <div className="flex flex-col gap-5">
        <div className="flex justify-around p-4 align-middle items-center">
            <h3>Products</h3>
            <select onChange={(e) => dispatch({type:"CHANGE_DEP",payload:e.target.value})}
            className="border border-black p-2">
                <option value="All" selected={category=="All"}>All</option>
                {
                    uniqueDepartments.map((item) => {
                        return(
                            <option value={item}
                            selected={category==item}>{item}</option>
                        )
                    })
                }
            </select>
            <div className="flex gap-3">
            <label>
                Low Stock Items</label>
            <input type="checkbox" name="lowStock" checked={low == true} onChange={(e) => 
                dispatch({type:"LOW_STOCK",payload:!low})}
                className="p-3"/>
            </div>
            <select onChange={(e) => dispatch({type:"SORT_PRODUCTS",payload:e.target.value})}
            className="border border-black p-2">
                <option value="name" selected={sort == "name"}>Name</option>
                <option value="price" selected={sort == "price"}>Price</option>
                <option value='stock' selected={sort == "stock"}>Stock</option>
            </select>
            <NavLink to="/new"><button className="bg-blue-600 p-3 rounded-md text-white">New</button>
            </NavLink>
        </div>
        <List products={sortByStocks}/>
        </div>
    )
}