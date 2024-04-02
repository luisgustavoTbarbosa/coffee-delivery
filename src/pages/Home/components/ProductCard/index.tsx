import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import {
          AddToCartButton,
          ProductCardActions,
          ProductCardAddToCart,
          ProductCardContent,
          ProductCardDescription,
          ProductCardFigure,
          ProductCardPrice,
          ProductCardTag,
          ProductCardTagContainer,
          QuantitySelector
        } from "./styles"

interface ProductCardProps {
  coffee: {
    name: string,
    description: string,
    price: number,
    tags: string[],
    image: string,
    stock: number
  }
}

export function ProductCard({ coffee }: ProductCardProps) {
  function formattingPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price)
  }

  return (
    <ProductCardContent>
      <ProductCardFigure>
        <img src={coffee.image} alt={coffee.name} />
      </ProductCardFigure>
      <div className="content">
        <ProductCardTagContainer>
          {
            coffee.tags.map((tag) => {
              return <ProductCardTag>{tag}</ProductCardTag>
            })
          }
        </ProductCardTagContainer>
        <strong>{coffee.name}</strong>
        <ProductCardDescription>{coffee.description}</ProductCardDescription>
        <ProductCardActions>
          <ProductCardPrice>R$ <span>{formattingPrice(coffee.price)}</span></ProductCardPrice>
          <ProductCardAddToCart>
            <QuantitySelector>
              <button>
                <Minus size={16} color="#8047F8" weight="bold" />
              </button>
              <span>1</span>
              <button>
                <Plus size={16} color="#8047F8" weight="bold" />
              </button>
            </QuantitySelector>
            <AddToCartButton>
              <ShoppingCart size={22} weight="fill" color="#FFFFFF"/>
            </AddToCartButton>
          </ProductCardAddToCart>
        </ProductCardActions>
      </div>
    </ProductCardContent>
  )
}