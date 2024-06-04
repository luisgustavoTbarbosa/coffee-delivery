import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import illustration from '../../assets/illustration.svg'
import { AddressInfo, ConfirmedContainer, ConfirmedTitle, IconContainer, InfosContainer } from './styles'

export function Confirmed() {
  const addresFromLocalStorage = localStorage.getItem('address') || ''
  const address = JSON.parse(addresFromLocalStorage)

  setTimeout(() => {
    localStorage.setItem('address', '')
    localStorage.setItem('cartItems', '')
  }, 1000)

  return (
    <ConfirmedContainer>
      <div>
        <ConfirmedTitle>Uhu! Pedido confirmado</ConfirmedTitle>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <AddressInfo>
          <InfosContainer>
            <IconContainer variant="purple">
              <MapPin size={20} color="#ffffff" weight="fill"/>
            </IconContainer>
            <div>
              <p>Entrega em <strong>{address.rua}, {address.numero}</strong></p>
              <p>{address.bairro} - {address.cidade}, {address.uf}</p>
            </div>
          </InfosContainer>
          <InfosContainer>
          <IconContainer variant="yellow">
              <Timer size={20} color="#ffffff" weight="fill"/>
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfosContainer>
          <InfosContainer>
            <IconContainer variant="yellow-dark">
              <CurrencyDollar size={20} color="#ffffff" />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </InfosContainer>
        </AddressInfo>
      </div>
      <figure>
        <img src={illustration} />
      </figure>
    </ConfirmedContainer>
  )
}