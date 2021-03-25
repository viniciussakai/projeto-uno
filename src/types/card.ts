export interface ICard {
  color?: ICardColor
  number?: number
  type?: ICardType
  back?: boolean
}

export enum ICardType {
  REVERSE_TYPE = 'reverse',
  SKIPPED_TYPE = 'skipped',
  DRAW_TWO_TYPE = 'draw_two',
  JOKER_TYPE = 'joker',
  JOKER_DRAW_FOUR_TYPE = 'joker_drawFour'
}

export enum ICardColor {
  YELLOW_CARD = 'yellow',
  GREEN_CARD = 'green',
  RED_CARD = 'red',
  BLUE_CARD = 'blue',
  BLACK_CARD = 'black'
}
