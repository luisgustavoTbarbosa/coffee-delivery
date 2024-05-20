import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { OrderForm } from "./OrderForm";
import { CardItem, CardItemActions, CardItemContent, CartBox, CheckoutContainer, CompleteOrder, ConfirmButton, QuantitySelector, RemoveButton, SelectedCoffees, SubtotalBox } from "./styles";

interface cartItem {
  image: string,
  name: string,
  price: number,
  quantity: number,
  stock: number
}

export function Checkout() {
  const cartItemsFromStorage = window.localStorage.getItem('cartItems')
  const cartItems = cartItemsFromStorage ?  JSON.parse(cartItemsFromStorage) : []

  function formattingPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price)
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
                return <CardItem>
                        <img src={item.image} />
                        <div>
                          <CardItemContent>
                            <p>{item.name}</p>
                            <p>R$ { formattingPrice(item.price) }</p>
                          </CardItemContent>
                          <CardItemActions>
                            <QuantitySelector>
                              <button>
                                <Minus size={16} color="#8047F8" weight="bold" />
                              </button>
                              <span>{item.quantity}</span>
                              <button>
                                <Plus size={16} color="#8047F8" weight="bold" />
                              </button>
                            </QuantitySelector>
                            <RemoveButton>
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