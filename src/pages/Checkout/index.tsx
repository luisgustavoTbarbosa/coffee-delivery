import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { OrderForm } from "./OrderForm";
import { CardItem, CardItemActions, CardItemContent, CartBox, CheckoutContainer, CompleteOrder, ConfirmButton, QuantitySelector, RemoveButton, SelectedCoffees, SubtotalBox } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

interface cartItem {
  image: string,
  name: string,
  price: number,
  quantity: number,
  stock: number
}

export function Checkout() {
  const cartItemsFromStorage = window.localStorage.getItem('cartItems')
  const cartItemsParsed = cartItemsFromStorage ?  JSON.parse(cartItemsFromStorage) : []

  const [cartItems, setCartItems] = useState([...cartItemsParsed])
  const { setCartQuantity } = useContext(CartContext)

  function formattingPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price)
  }

  function changeQuantity(operation: string, coffee: cartItem) {
    const newCartItems = cartItems.reduce((newItems: Array<object>, item: { name: string; quantity: number; stock: number }) => {
      if (item.name === coffee.name) {
        if (operation === 'sum' && item.quantity < item.stock) {
          item.quantity += 1
        }

        if (operation === 'subtract' && item.quantity > 0) {
          item.quantity -= 1
        }

        newItems.push(item)
      } else {
        newItems.push(item)
      }

      return newItems
    }, [])

    window.localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    setCartItems(newCartItems)
  }

  function removeCartItem(coffeeNameToRemove: string) {
    const newCartItems = cartItems.filter(item => item.name !== coffeeNameToRemove)
    window.localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    setCartItems(newCartItems)
    setCartQuantity(newCartItems.length)
  }

  return (
    <CheckoutContainer>
      <CompleteOrder>
        <strong>Complete seu pedido</strong>
        <OrderForm />
      </CompleteOrder>
      <SelectedCoffees>
        <strong>Cafés selecionados</strong>
        <CartBox>
          <div>
            {
              cartItems.map((item: cartItem) => {
                return <CardItem key={item.name}>
                        <img src={item.image} />
                        <div>
                          <CardItemContent>
                            <p>{item.name}</p>
                            <p>R$ { formattingPrice(item.price) }</p>
                          </CardItemContent>
                          <CardItemActions>
                            <QuantitySelector>
                              <button onClick={() => changeQuantity('subtract', item)}>
                                <Minus size={16} color="#8047F8" weight="bold" />
                              </button>
                              <span>{item.quantity}</span>
                              <button onClick={() => changeQuantity('sum', item)}>
                                <Plus size={16} color="#8047F8" weight="bold" />
                              </button>
                            </QuantitySelector>
                            <RemoveButton onClick={() => removeCartItem(item.name)}>
                              <Trash size={16} color="#8047F8" weight="bold" />
                              Remover
                            </RemoveButton>
                          </CardItemActions>
                        </div>
                      </CardItem>
              })
            }
          </div>
          <SubtotalBox>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </SubtotalBox>
          <ConfirmButton>Confirmar pedido</ConfirmButton>
        </CartBox>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}