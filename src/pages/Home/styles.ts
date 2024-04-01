import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.875rem 0;
  gap: 0 3.5rem;

  img {
    width: 40%;
    height: 40%;
    filter: drop-shadow(0px 0px 28px rgb(235, 193, 54, 45%));
  }
`

export const AboutTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${(props) => props.theme["base-title"]};
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
`

export const AboutDescription = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  line-height: 130%;
`

export const CoffeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem 0;
  padding: 2rem 0 9.8rem;

  strong {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const CoffeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`

export const ProductCard = styled.div`
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

export const ProductCardPrice = styled.p`
  font-size: 0.875rem;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`