import { AboutContainer, AboutDescription, AboutTitle, TopicsBox, Topics } from "./styles";

import aboutBanner from '../../assets/about-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Home() {
  return (
    <main>
      <AboutContainer>
        <div>
          <AboutTitle>Encontre o café perfeito para qualquer hora do dia</AboutTitle>
          <AboutDescription>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</AboutDescription>
          <TopicsBox>
            <Topics>
              <span>
                <ShoppingCart size={20} color="#ffffff" weight="fill" />
              </span>
              Compra simples e segura
            </Topics>
            <Topics>
              <span>
                <Package size={20} color="#ffffff" weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </Topics>
            <Topics>
              <span>
                <Timer size={20} color="#ffffff" weight="fill" />
              </span>
              Entrega rápida e rastreada
            </Topics>
            <Topics>
              <span>
                <Coffee size={20} color="#ffffff" weight="fill" />
              </span>
              O café chega fresquinho até você
            </Topics>
          </TopicsBox>
        </div>
        <img src={aboutBanner} alt="Copo de café da coffee delivery" />
      </AboutContainer>
      <div>
        coffee list
      </div>
    </main>
  )
}