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