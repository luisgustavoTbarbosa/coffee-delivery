import { CheckoutContainer, HeaderContainer, LocationInfo } from './styles'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Início">
          <img src={coffeeDeliveryLogo} />
        </NavLink>

        <CheckoutContainer>
          <LocationInfo>
            <MapPin size={22} weight="fill" color="#8047F8" />
            <span>Franco da Rocha, SP</span>
          </LocationInfo>
          <NavLink to="/checagem" title="Carrinho">
            <ShoppingCart size={22} weight="fill" color="#C47F17"/>
          </NavLink>
        </CheckoutContainer>
      </nav>
    </HeaderContainer>
  )
}
