import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { OrderForm } from "./OrderForm";
import { CardItem, CardItemActions, CardItemContent, CartBox, CheckoutContainer, CompleteOrder, ConfirmButton, QuantitySelector, RemoveButton, SelectedCoffees, SubtotalBox } from "./styles";

export function Checkout() {
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
            <CardItem>
              <img src="https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Expresso.png" />
              <div>
                <CardItemContent>
                  <p>Expresso tradicional</p>
                  <p>R$ 9,99</p>
                </CardItemContent>
                <CardItemActions>
                  <QuantitySelector>
                    <button>
                      <Minus size={16} color="#8047F8" weight="bold" />
                    </button>
                    <span>1</span>
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
            <CardItem>
              <img src="https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Americano.png" />
              <div>
                <CardItemContent>
                  <p>Expresso tradicional</p>
                  <p>R$ 9,99</p>
                </CardItemContent>
                <CardItemActions>
                  <QuantitySelector>
                    <button>
                      <Minus size={16} color="#8047F8" weight="bold" />
                    </button>
                    <span>1</span>
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