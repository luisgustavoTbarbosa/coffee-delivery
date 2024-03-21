import { styled } from "styled-components";

interface TopicInfoProps {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple';
}

export const TopicBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
`

export const TopicInfo = styled.p<TopicInfoProps>`
  display: flex;
  align-items: center;
  gap: 0 0.75rem;
  color: ${(props) => props.theme["base-text"]};
  line-height: 130%;

  span {
    display: flex;
    padding: 8px;
    border-radius: 100px;

    ${(props) => `background-color: ${props.theme[props.variant]}`}
  }
`
