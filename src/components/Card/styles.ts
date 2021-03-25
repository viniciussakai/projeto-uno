import { ICardColor } from '@/types/card'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px;
  margin: 0;
`
type CardContainerProps = { color: ICardColor }
export const CardContainer = styled.div<CardContainerProps>`
  width: 56mm;
  height: 87mm;

  border-radius: 5%;
  color: #ffffff;
  background-color: ${props => props.theme.colors[props.color].default};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1em #000;
  transition: 0.3s;

  &:hover {
    scale: 1.1;
    z-index: 30;
  }
`

export const NumberCard = styled.div`
  font-size: 200px;
  font-weight: 100;

  span {
    font-size: 30px;
    font-weight: 300;
  }

  span.top {
    position: absolute;
    top: 10px;
    left: 15px;
  }

  span.bottom {
    position: absolute;
    bottom: 10px;
    right: 15px;
    transform: rotate(180deg);
  }
`

export const SVGCard = styled.div`
  position: relative;
  font-size: 200px;
  font-weight: 100;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.main {
    display: flex;
    align-items: center;
    svg {
      height: 100px;
      width: 100px;
    }
  }

  div.top {
    position: absolute;
    top: -130px;
    left: 20px;
    height: 100%;
    width: 100%;
    svg {
      height: 30px;
      width: 30px;
    }
  }

  div.bottom {
    position: absolute;
    bottom: -130px;
    right: 20px;

    transform: rotate(180deg);
    height: 100%;
    width: 100%;
    svg {
      height: 30px;
      width: 30px;
    }
  }
`
export const BackCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div.logo {
    svg {
      height: 100px;
      width: 100px;
    }
  }
  .line {
    position: absolute;
    bottom: 15px;
    left: 0;
  }
`
