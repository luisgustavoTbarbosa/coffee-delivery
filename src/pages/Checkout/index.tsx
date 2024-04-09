import { OrderForm } from "./OrderForm";
import { CheckoutContainer, CompleteOrder, SelectedCoffees } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <strong>Complete seu pedido</strong>
        <OrderForm />
      </CompleteOrder>
      <SelectedCoffees>
        <strong>Cafés selecionados</strong>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}