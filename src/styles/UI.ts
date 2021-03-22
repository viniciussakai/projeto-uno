import styled from 'styled-components'

type IButton = {
  color: 'yellow' | 'green' | 'blue' | 'red' | 'black'
  width?: string
}
export const Button = styled.div<IButton>`
  width: ${props => (props.width ? props.width : '100%')};

  font-family: 'Luckiest Guy', cursive;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;

  padding: 20px 20px 10px 20px;
  margin: 10px;

  border-radius: 20px;
  border: 5px solid ${props => props.theme.colors[props.color].dark};

  text-shadow: 0 0 3px ${props => props.theme.colors[props.color].dark};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors[props.color].default};

  &:hover {
    opacity: 0.9;
  }
`
