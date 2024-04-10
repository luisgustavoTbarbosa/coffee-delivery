import styled from "styled-components";

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

export const FormAddress = styled.form`
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
