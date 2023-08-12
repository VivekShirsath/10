
export const reducer = (state,action) => {
    switch(action.type){
        case "CHANGE_DEP":{
            localStorage.setItem("category",JSON.stringify(action.payload))
            return{
                ...state,
                category : action.payload,     
            }
        }
        case "LOW_STOCK":{
            localStorage.setItem("low",JSON.stringify(action.payload))
            return{
                ...state,
                low : action.payload
            }
        }
        case "SORT_PRODUCTS":{
            localStorage.setItem("sort",JSON.stringify(action.payload))
            return{
                ...state,
                sort : action.payload
            }
        }
        case "ADD_PRODCUTS":{
            return{
                ...state,
                products:[...state.products,action.payload]
            }
        }
    }
}