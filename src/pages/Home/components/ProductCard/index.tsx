import { useState } from "react"
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
  const [quantity, setQuantity] = useState(1)
  console.log('teste')

  function changeQuantity(operation: string) {
    if (operation === 'subtract' && quantity > 1) {
      setQuantity(quantity - 1)
    }
    
    if (operation === 'sum' && quantity < coffee.stock) {
      setQuantity(quantity + 1)
    }
  }

  function addProductToCart() {
    const cartItemsFromStorage = window.localStorage.getItem('cartItems')
    console.log('cartItemsFromStorage', cartItemsFromStorage)
    const productToAdd = {
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      stock: coffee.stock,
      quantity
    }

    if (!cartItemsFromStorage) {
      window.localStorage.setItem('cartItems', JSON.stringify([productToAdd]))
    }

    if (cartItemsFromStorage) {
      const cartItems = JSON.parse(cartItemsFromStorage)
      console.log('cartItems', cartItems)
      cartItems.push(productToAdd)
      console.log('cartItems', cartItems)
      window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }

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
              return <ProductCardTag key={tag}>{tag}</ProductCardTag>
            })
          }
        </ProductCardTagContainer>
        <strong>{coffee.name}</strong>
        <ProductCardDescription>{coffee.description}</ProductCardDescription>
        <ProductCardActions>
          <ProductCardPrice>R$ <span>{formattingPrice(coffee.price)}</span></ProductCardPrice>
          <ProductCardAddToCart>
            <QuantitySelector>
              <button onClick={() => changeQuantity('subtract')}>
                <Minus size={16} color="#8047F8" weight="bold" />
              </button>
              <span>{quantity}</span>
              <button onClick={() => changeQuantity('sum')}>
                <Plus size={16} color="#8047F8" weight="bold" />
              </button>
            </QuantitySelector>
            <AddToCartButton onClick={addProductToCart}>
              <ShoppingCart size={22} weight="fill" color="#FFFFFF"/>
            </AddToCartButton>
          </ProductCardAddToCart>
        </ProductCardActions>
      </div>
    </ProductCardContent>
  )
}