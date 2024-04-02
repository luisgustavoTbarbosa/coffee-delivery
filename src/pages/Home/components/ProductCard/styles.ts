import { styled } from "styled-components"

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.25rem;
  border-radius: 6px 35px 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};

  .content {
    text-align: center;
  }

  strong {
    font-size: 1.25rem;
  }
`

export const ProductCardFigure = styled.figure`
  margin-top: -2.5rem;

  img {
    height: 7.5rem;
  }
`

export const ProductCardTagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem;
`

export const ProductCardTag = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 100px;
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const ProductCardDescription = styled.p`
  margin: 0.5rem 0 2.063rem;
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.875rem;
`

export const ProductCardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductCardPrice = styled.p`
  font-size: 0.875rem;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const ProductCardAddToCart = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  button {
    display: flex;
    padding: 0.75rem 0.5rem;
    border: none;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    
    svg {
      transition: all .2s ease;
    }

    &:hover {
      svg {
        fill: ${(props) => props.theme["purple-dark"]};
      }
    }
  }

  span {
    color: ${(props) => props.theme["base-title"]};
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme["purple-dark"]};
  cursor: pointer;
  transition: background .2s ease;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
