
export const reducer = (state,action) => {
    switch(action.type){
        case "CHANGE_DEP":{
            return{
                ...state,
                category : action.payload,
            }
        }
        case "LOW_STOCK":{
            console.log(action.payload)
            return{
                ...state,
                low : action.payload
            }
        }
        case "SORT_PRODUCTS":{
            console.log(action.payload)
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