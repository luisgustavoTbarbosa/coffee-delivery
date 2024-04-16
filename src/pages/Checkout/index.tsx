import { OrderForm } from "./OrderForm";
import { CardItem, CardItemActions, CardItemContent, CartBox, CheckoutContainer, CompleteOrder, SelectedCoffees, SubtotalBox } from "./styles";

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
                  <div>qty</div>
                  <div>remove</div>
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
                  <div>qty</div>
                  <div>remove</div>
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
          <button>Confirmar pedido</button>
        </CartBox>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}