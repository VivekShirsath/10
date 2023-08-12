import { NavLink } from "react-router-dom"
export const List = ({products}) => {

    if(products?.length == 0) return <h3>No Products</h3>
    return(
        <div>
            
    <table className="border border-gray-300 rounded-md p-3">
      <thead className="bg-gray-300 p-3">
        <tr className="p-3 ">
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item) => (
          <tr key={item.id} className="p-3 ">
            <td>
             
                <img src={item.imageUrl} alt={item.name} width="100" 
                />
               
            </td>
            
            <td className="underline">
            <NavLink to={"/specific/" + item.id} >{item.name}
            </NavLink></td>
           
            <td className="w-fit">{item.description}</td>
            <td>${item.price}</td>
            <td>{item.stock}</td>
            <td>{item.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    )
}