import { useState,useEffect } from "react";
import { useData } from "../context/DataContext";
import { v4 as uuid } from "uuid";

export const NewProduct = () => {
    const {products,dispatch} = useData();
    const [formData,setFormData] = useState({
        id : uuid(),
        department: 'Kitchen',
        name: '',
        description:
          '',
        price: 0,
        stock: 0,
        sku: '',
        supplier: '',
        delivered: 0,
        imageUrl: '', 
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      console.log(products)

      const handleSubmit = (e) => {
        e.preventDefault();
          dispatch({type:"ADD_PRODCUTS",payload:formData})
          localStorage.setItem("products",JSON.stringify(
            [...products,formData]))
      }

     

    return(
        <div className="p-5 flex flex-col gap-3 bg-slate-300 w-3/4">
            <h3 className="text-center text-lg">Add New Product</h3>
            <form>
                <div className="flex flex-col gap-3">
                <label>Department</label>
                <select onChange={(e) => setFormData({...formData,department:e.target.value})}
                className="border border-black">
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input type="text" className="border border-black p-2"
                    value={formData.name}
                    name="name"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Description</label>
                    <input type="text" className="border border-black p-2"
                    value={formData.description}
                    name="description"
                    onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Price</label>
                    <input type="number" className="border border-black p-2"
                    value={formData.price}
                    name="price"
                    onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Stock</label>
                    <input type="number" className="border border-black p-2"
                    value={formData.stock}
                    name="stock"
                    onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>SKU</label>
                    <input type="text" className="border border-black p-2"
                    value={formData.sku}
                    name="sku"
                    onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Supplier</label>
                    <input type="text" className="border border-black p-2"
                    value={formData.supplier}
                    name="supplier"
                    onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Delivered</label>
                    <input type="number" className="border border-black p-2" 
                    value={formData.delivered}
                    name="delivered"
                    onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Image URL</label>
                    <input type="text" className="border border-black p-2"
                    value={formData.imageUrl}
                    name="imageUrl"
                    onChange={handleInputChange}/>
                </div>
                <button onClick={handleSubmit}
                className="bg-blue-600 p-3 rounded-md text-white
                mt-2 flex justify-center">Add Product</button>
            </form>
        </div>
    )
}