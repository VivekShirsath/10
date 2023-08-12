import { useData } from "../context/DataContext"

export const Home = () => {
    const {products} = useData();
    const totalStock = products.reduce((acc,curr) => acc + curr.stock,0);
    const totalDelivery = products.reduce((acc,curr) => acc+curr.delivered,0);
    const totalLow = products.filter(item => item.stock <=10);
    console.log(totalLow)
    return(
        <div className="flex p-4 gap-4 w-screen justify-around h-fit">
            <div className="bg-slate-300 p-4 rounded-md text-lg flex
            items-center flex-col">
                <div className="text-green-600 font-bold">{totalStock}</div>
                <div>Total Stock</div>
            </div>
            <div className="bg-slate-300 p-4 rounded-md text-lg
            flex
            items-center flex-col">
                <div className="text-orange-400 font-bold">{totalDelivery}</div>
                <div>Total Delivery</div>
            </div>
            <div className="bg-slate-300 p-4 rounded-md text-lg
            flex
            items-center flex-col">
                <div className="text-red-600 font-bold">{totalLow.length}</div>
                <div>Low Stock Items</div>
            </div>
           
           
        </div>
    )
}