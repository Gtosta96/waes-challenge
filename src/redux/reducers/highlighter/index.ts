import { EColors } from '../../models/colors';
import { IAction } from '../../models/redux';
import { EActions, IHighlightText, IState, IUpdateColor, IUpdateFilterColor } from './types';

const INITIAL_STATE: IState = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula nulla et blandit luctus.Praesent pellentesque, nunc a malesuada placerat, augue massa malesuada augue, vel eleifend metus turpis sit amet nunc.In et bibendum erat.Ut sed venenatis urna.Nulla commodo eget diam in gravida.Nulla et risus dictum, efficitur massa eget,   rhoncus tellus.Suspendisse ultricies fringilla metus quis bibendum.Curabitur dictum iaculis tortor ultricies pharetra.",
  selectedColor: EColors.RED,
  colors: [
    EColors.RED,
    EColors.PINK,
    EColors.PURPLE,
    EColors.DEEPPURPLE,
    EColors.INDIGO,
    EColors.BLUE,
    EColors.CYAN,
    EColors.TEAL,
    EColors.GREEN,
    EColors.LIGHTGREEN,
    EColors.LIME,
    EColors.YELLOW,
    EColors.AMBER,
    EColors.ORANGE,
    EColors.DEEPORANGE,
    EColors.BROWN
  ],
  highlightsSelectedColor: EColors.RED,
  highlights: {
    Red: [{ colStart: 0, colEnd: 10, text: "Lorem ipsu" }]
  }
};
export default function reducer(state = INITIAL_STATE, action: IAction<any>): IState {
  switch (action.type) {
    case EActions.UPDATE_COLOR: {
      return {
        ...state,
        selectedColor: action.payload.color,
        highlights: {
          ...state.highlights,
          [action.payload.color]: state.highlights[action.payload.color] || []
        }
      };
    }

    case EActions.UPDATE_FILTER_COLOR: {
      return {
        ...state,
        highlightsSelectedColor: action.payload.color,
        highlights: {
          ...state.highlights,
          [action.payload.color]: state.highlights[action.payload.color] || []
        }
      };
    }

    case EActions.HIGHLIGHT_TEXT: {
      return {
        ...state,
        highlights: {
          ...state.highlights,
          [state.selectedColor]: [
            ...state.highlights[state.selectedColor],
            action.payload.coordinates
          ]
        }
      };
    }

    default:
      return state;
  }
}

export const updateColor = (color: string): IUpdateColor => ({
  type: EActions.UPDATE_COLOR,
  payload: { color }
});

export const updateFilterColor = (color: string): IUpdateFilterColor => ({
  type: EActions.UPDATE_FILTER_COLOR,
  payload: { color }
});

export const highlightText = (coordinates: string): IHighlightText => ({
  type: EActions.HIGHLIGHT_TEXT,
  payload: { coordinates }
});
