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
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.625rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow-light"]};
    transition: background .2s ease;

    &:hover {
      background-color: #edde9e;
    }

    span {
      position: absolute;
      top: -12px;
      right: -12px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border-radius: 100px;
      background-color: ${(props) => props.theme["yellow-dark"]};
      color: ${(props) => props.theme["white"]};
      font-size: 14px;
      font-weight: 700;
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
