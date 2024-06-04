import styled from "styled-components";

interface TopicInfoProps {
  variant: 'yellow-dark' | 'yellow' | 'purple';
}

export const ConfirmedContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 5rem;
`

export const ConfirmedTitle = styled.h2`
  color: ${(props) => props.theme["yellow-dark"]};
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
`

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid #DBAC2C;
  border-radius: 6px 36px 6px 36px;

  p {
    line-height: 1.5;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconContainer = styled.span<TopicInfoProps>`
  display: flex;
  padding: 0.5rem;
  border-radius: 100%;
  ${(props) => `background-color: ${props.theme[props.variant]}`}
`