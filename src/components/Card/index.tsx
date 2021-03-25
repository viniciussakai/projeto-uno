import React from 'react'
import { ICard, ICardColor, ICardType } from '@/types/card'
import drawTwo from '../../public/symbols/draw_two.svg'
import jokerDraw from '../../public/symbols/joker_drawFour.svg'
import joker from '../../public/symbols/joker.svg'
import reverse from '../../public/symbols/reverse.svg'
import skipped from '../../public/symbols/skipped.svg'
import Logo from '../../public/logo_alt.svg'
import Line from '../../public/symbols/line.svg'
import {
  CardContainer,
  Container,
  NumberCard,
  SVGCard,
  BackCard
} from 'src/components/Card/styles'

const Card: React.FC<ICard> = ({ color, number, type, back }) => {
  const isJoker = type === ICardType.JOKER_TYPE
  const isDrawJoker = type === ICardType.JOKER_DRAW_FOUR_TYPE
  const getSymbol = () => {
    switch (type) {
      case ICardType.DRAW_TWO_TYPE:
        return drawTwo
      case ICardType.JOKER_DRAW_FOUR_TYPE:
        return jokerDraw
      case ICardType.JOKER_TYPE:
        return joker
      case ICardType.REVERSE_TYPE:
        return reverse
      case ICardType.SKIPPED_TYPE:
        return skipped
    }
  }
  const Symbol = getSymbol()

  if (isJoker || isDrawJoker || back) {
    color = ICardColor.BLACK_CARD
  }

  return (
    <>
      <Container>
        <CardContainer color={color}>
          {number && (
            <NumberCard>
              <div>{number}</div>
              <span className="top">{number}</span>
              <span className="bottom">{number}</span>
            </NumberCard>
          )}

          {Symbol && (
            <SVGCard>
              <div className="main">{<Symbol />}</div>
              <div className="top">{<Symbol />}</div>
              <div className="bottom">{<Symbol />}</div>
            </SVGCard>
          )}
          {back && (
            <BackCard>
              <div className="logo">
                <Logo />
              </div>
              <div className="line">
                <Line />
              </div>
            </BackCard>
          )}
        </CardContainer>
      </Container>
    </>
  )
}

export default Card
