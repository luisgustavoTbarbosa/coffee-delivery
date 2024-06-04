import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { BoxTitle, CardItem, CardItemActions, CardItemContent, CartBox, CheckoutContainer, CompleteOrder, ConfirmButton, DeliveryAddressBox, FormAddress, PaymentMethods, QuantitySelector, RemoveButton, SelectedCoffees, SubtotalBox } from "./styles";
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

  const cartProductsValue = cartItems.reduce((totalValue, item) => {
    return totalValue += (item.price * item.quantity)
  }, 0)

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

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  function handleCreateNewRequest(data: object) {
    window.localStorage.setItem('address', JSON.stringify(data))
    navigate('/checagem/pedido-confirmado')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewRequest)}>
      <CompleteOrder>
        <strong>Complete seu pedido</strong>
        <div>
          <DeliveryAddressBox>
            <BoxTitle>
              <MapPinLine color="#C47F17" size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </BoxTitle>
            <FormAddress>
              <input type="number" id="cep" placeholder="CEP" {...register('cep')} required/>
              <input type="text" id="rua" placeholder="Rua" {...register('rua')} required/>
              <input type="number" id="numero" placeholder="Número" {...register('numero')} required/>
              <input type="text" id="complemento" placeholder="Complemento" {...register('complemento')}/>
              <input type="text" id="bairro" placeholder="Bairro" {...register('bairro')} required />
              <input type="text" id="cidade" placeholder="Cidade" {...register('cidade')} required/>
              <input type="text" id="uf" placeholder="UF" {...register('uf')} required/>
            </FormAddress>
          </DeliveryAddressBox>
          <DeliveryAddressBox>
            <BoxTitle>
              <CurrencyDollar color="#8047F8" size={22} />
              <div>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </BoxTitle>
            <PaymentMethods>
              <button>
                <CreditCard color="#8047F8" size={20}/>
                Cartão de crédito
              </button>
              <button>
                <Bank color="#8047F8" size={20}/>
                Cartão de débito
              </button>
              <button>
                <Money color="#8047F8" size={20}/>
                Dinheiro
              </button>
            </PaymentMethods>
          </DeliveryAddressBox>
        </div>
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
              <span>
                R$ { formattingPrice(cartProductsValue) }
              </span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ { formattingPrice(cartProductsValue + 3.5) }</strong>
            </div>
          </SubtotalBox>
          <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
        </CartBox>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}