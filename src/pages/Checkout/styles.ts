import styled from "styled-components";

export const CheckoutContainer = styled.form`
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

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 500;

    &:last-of-type {
      color: ${(props) => props.theme["base-text"]};
      font-weight: 700;
    }
  }
`

export const CardItemActions = styled.div`
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
    padding: 0.5rem;
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

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.375rem;
  border: none;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: background .2s ease;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
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

export const ConfirmButton = styled.button`
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
`


export const DeliveryAddressBox = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  &:first-of-type {
    margin-bottom: 0.75rem;
  }
`

export const BoxTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 2rem;

  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
  }

  p, span {
    line-height: 130%;
  }
`

export const FormAddress = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;

  input {
    min-width: 12.5rem;
    padding: 0.75rem;
    border-radius: 4px;
    border: none;
    background-color: ${(props) => props.theme["base-input"]};
    outline: 1px solid ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &#rua {
      width: 100%;
    }

    &#complemento,
    &#cidade {
      flex: 1;
    }

    &#uf {
      min-width: 3.75rem;
      width: 3.75rem;
    }
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    gap: 0.75rem;
    padding: 1rem 0.75rem;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: background .2s ease;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }
`