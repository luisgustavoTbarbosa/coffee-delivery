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
  padding-top: 2rem;

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
  gap: 2rem 2.5rem;
`

export const ProductCard = styled.div`
  width: 100%;
  padding: 1.25rem;
  border-radius: 6px 35px 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
`
