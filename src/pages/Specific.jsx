import { useParams } from "react-router-dom"
import { useData } from './../context/DataContext';
import { Department } from './Department';


export const Specific = () => {
    const {id} = useParams();
    const {products} = useData();
    
    const filter = products.find((item) => item.id == id);
    console.log(filter)
    const {imageUrl,name,description,price,stock,sku,supplier,delivered,
    department} = filter;
    return(
        <div>
           <img src={imageUrl} className="w-96"/>
           <div>Price : {price}</div>
           <div>Stock : {stock}</div>
           <div>Supplier : {supplier}</div>
           <div>Department : {department}</div>
           <div>SKU : {sku}</div>
           <div>Description : {description}</div>
        </div>
    )
}