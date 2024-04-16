import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;

  strong {
    display: block;
    margin-bottom: 0.938rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const CompleteOrder = styled.div`
  flex: 1;  
`

export const SelectedCoffees = styled.div`
  min-width: 448px;
`

export const CartBox = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme["base-card"]};

  button {
    width: 100%;
    padding: 0.75rem 0.5rem;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;
    transition: background .2s ease;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    flex: 1;
  }
`

export const CardItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const CardItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const SubtotalBox = styled.div`
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    p, span {
      font-size: 0.875rem;
    }

    strong {
      margin: 0;
      font-size: 1.25rem;
    }
  }

  div + div {
    margin-top: 0.75rem;
  }
`