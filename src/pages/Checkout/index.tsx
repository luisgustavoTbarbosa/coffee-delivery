import { OrderForm } from "./OrderForm";
import { CartBox, CheckoutContainer, CompleteOrder, SelectedCoffees, SubtotalBox } from "./styles";

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
          <div></div>
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