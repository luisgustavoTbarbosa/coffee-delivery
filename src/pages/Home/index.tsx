import { AboutContainer, AboutDescription, AboutTitle } from "./styles";

import aboutBanner from '../../assets/about-banner.png'
import { Topics } from "./components/Topics";

export function Home() {
  return (
    <main>
      <AboutContainer>
        <div>
          <AboutTitle>Encontre o café perfeito para qualquer hora do dia</AboutTitle>
          <AboutDescription>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</AboutDescription>
          <Topics />
        </div>
        <img src={aboutBanner} alt="Copo de café da coffee delivery" />
      </AboutContainer>
      <div>
        coffee list
      </div>
    </main>
  )
}