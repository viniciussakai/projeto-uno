import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background.default};
    color: ${props => props.theme.colors.text.default};
    font: 400 16px Roboto, sans-serif;
  }
`
