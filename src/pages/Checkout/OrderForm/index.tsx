import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { DeliveryAddressBox, BoxTitle, FormAddress, PaymentMethods } from "./styles";

export function OrderForm() {
  return (
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
          <input type="number" name="cep" id="cep" placeholder="CEP"/>
          <input type="text" name="rua" id="rua" placeholder="Rua"/>
          <input type="number" name="numero" id="numero" placeholder="Número"/>
          <input type="text" name="complemento" id="complemento" placeholder="Complemento"/>
          <input type="text" name="bairro" id="bairro" placeholder="Bairro"/>
          <input type="text" name="cidade" id="cidade" placeholder="Cidade"/>
          <input type="text" name="uf" id="uf" placeholder="UF"/>
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
  )
}
