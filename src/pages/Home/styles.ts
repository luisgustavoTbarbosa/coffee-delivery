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

export const TopicsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
`

export const Topics = styled.p`
  display: flex;
  align-items: center;
  gap: 0 0.75rem;
  color: ${(props) => props.theme["base-text"]};
  line-height: 130%;

  span {
    display: flex;
    padding: 8px;
    border-radius: 100px;
    background: #C47F17;
  }
`