import { ReactNode, createContext, useState } from "react";

interface CartContextType {
    cartQuantity: number,
    setCartQuantity: (quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const cartItemsFromStorage = window.localStorage.getItem('cartItems')
    const defaultQuantity = cartItemsFromStorage ?  JSON.parse(cartItemsFromStorage).length : 0

    const [cartQuantity, setCartQuantity] = useState(defaultQuantity)

    return (
        <CartContext.Provider
            value={{
                cartQuantity,
                setCartQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
}