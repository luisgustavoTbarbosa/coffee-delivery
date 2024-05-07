import {
    AboutContainer,
    AboutDescription,
    AboutTitle,
    CoffeList,
    CoffeListContainer
  } from "./styles";

import aboutBanner from '../../assets/about-banner.png'
import { Topics } from "./components/Topics";
import { ProductCard } from "./components/ProductCard";

const coffeeCatalog = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 4.20,
    tags: ['Tradicional'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Expresso.png',
    stock: 11
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 5.00,
    tags: ['Tradicional'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Americano.png',
    stock: 20
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 5.50,
    tags: ['Tradicional'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Expresso_Cremoso.png',
    stock: 20
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5.00,
    tags: ['Tradicional', 'Gelado'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Cafe_Gelado.png',
    stock: 45
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 4.20,
    tags: ['Tradicional', 'Com leite'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Cafe_com_Leite.png',
    stock: 35
  },
  {
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 6.00,
    tags: ['Tradicional', 'Com leite'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Latte.png',
    stock: 5
  },
  {
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 6.00,
    tags: ['Tradicional', 'Com leite'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Capuccino.png',
    stock: 7
  },
  {
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 6.00,
    tags: ['Tradicional', 'Com leite'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Macchiato.png',
    stock: 14
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 7.40,
    tags: ['Tradicional', 'Com leite'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Mochaccino.png',
    stock: 11
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 7.40,
    tags: ['Especial', 'Com leite'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Chocolate_Quente.png',
    stock: 11
  },
  {
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 12,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Cubano.png',
    stock: 22
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 11,
    tags: ['Especial'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Havaiano.png',
    stock: 13
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    tags: ['Especial'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/53a210b945acd2d49ee0efa698735aedda76fac7/coffee-delivery/Arabe.png',
    stock: 21
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 12,
    tags: ['Especial', 'Alcoólico'],
    image: 'https://raw.githubusercontent.com/luisgustavoTbarbosa/project-assets/3b48acfc5ffcbfa9ebd32ae0c610806f07b1306b/coffee-delivery/Irlandes.png',
    stock: 8
  }
]

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
      <CoffeListContainer>
        <strong>Nossos cafés</strong>
        <CoffeList>
          {
            coffeeCatalog.map((coffee) => {
              return <ProductCard key={coffee.name} coffee={coffee} />
            })
          }
        </CoffeList>
      </CoffeListContainer>
    </main>
  )
}