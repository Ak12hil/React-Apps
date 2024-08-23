import React , {createContext} from 'react'

export const CartContext=createContext({
    items:[], 
    addingToCart:()=>{},
    updateCartItem:()=>{}
});


export default function CartContextProvider({children}){
   return <CartContext.Provider>{children}</CartContext.Provider>;
}

