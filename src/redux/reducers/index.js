const iniState = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120,
        },
        "cartCount": 1,
    },
]

const rootReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': 
            let ok = false;
            state.forEach((item)=>{
                ok = ok || (action.payload.id===item.id)
            })
            if(ok){
                state.forEach((item)=>{
                    if(action.payload.id===item.id){
                        item.cartCount++;
                    }
                })
            }
            else{
                state = [...state,action.payload];
            }
            return state;
        case 'INC_COUNT': 
            state.forEach((item)=>{
                if(action.payload.id===item.id){
                    item.cartCount++;
                }
            })
            return state;
        case 'DEC_COUNT': 
            state.forEach((item)=>{
                if(action.payload.id===item.id){
                    item = action.payload;
                }
            })
            return state;
        case 'DELETE_FROM_CART': 
            const newState = state.filter((item)=>{
                return (item.id!==action.payload.id);
            })    
            state = newState;
            return state;
        default: return state;
    }
}

export default rootReducer