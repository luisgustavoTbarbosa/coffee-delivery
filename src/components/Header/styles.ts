import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  nav {
    display: flex;
    justify-content: space-between;
  }
`

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    padding: 0.625rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow-light"]};
    transition: background .2s ease;

    &:hover {
      background-color: #edde9e;
    }
  }
`

export const LocationInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.625rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["purple-light"]};

    span {
      color: ${(props) => props.theme["purple-dark"]};
      font-size: 0.875rem;
    }
`
