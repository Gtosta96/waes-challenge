import { EColors } from '../../../models/colors';
import { ICoordinates } from '../../../models/highlighter';
import { IAction } from '../../../models/redux';
import { EActions, IHighlightText, IState, IUpdateColor as IUpdateTextColorFilter, IUpdateFilterColor } from './types';

const INITIAL_STATE: IState = {
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

  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula nulla et blandit luctus.Praesent pellentesque, nunc a malesuada placerat, augue massa malesuada augue, vel eleifend metus turpis sit amet nunc.In et bibendum erat.Ut sed venenatis urna.Nulla commodo eget diam in gravida.Nulla et risus dictum, efficitur massa eget,   rhoncus tellus.Suspendisse ultricies fringilla metus quis bibendum.Curabitur dictum iaculis tortor ultricies pharetra.",
  textColorFilter: EColors.RED,

  highlightsColorFilter: EColors.RED,
  highlights: []
};
export default function reducer(state = INITIAL_STATE, action: IAction<any>): IState {
  switch (action.type) {
    case EActions.UPDATE_TEXT_COLOR_FILTER: {
      return {
        ...state,
        textColorFilter: action.payload.color
      };
    }

    case EActions.UPDATE_FILTER_COLOR: {
      return {
        ...state,
        highlightsColorFilter: action.payload.color
      };
    }

    case EActions.HIGHLIGHT_TEXT: {
      // const filter = state.highlights.filter(highlight => {
      //   return (
      //     action.payload.coordinates.colStart >= highlight.colStart &&
      //     action.payload.coordinates.colEnd <= highlight.colEnd
      //   );
      // });

      const x = [...state.highlights, action.payload.coordinates].slice().sort((a: any, b: any) => {
        return a.colStart - b.colStart;
      });

      return {
        ...state,
        // highlights: [...state.highlights, action.payload.coordinates]
        highlights: x
      };
    }

    default:
      return state;
  }
}

export const updateTextColorFilter = (color: string): IUpdateTextColorFilter => ({
  type: EActions.UPDATE_TEXT_COLOR_FILTER,
  payload: { color }
});

export const updateFilterColor = (color: string): IUpdateFilterColor => ({
  type: EActions.UPDATE_FILTER_COLOR,
  payload: { color }
});

export const highlightText = (coordinates: ICoordinates): IHighlightText => ({
  type: EActions.HIGHLIGHT_TEXT,
  payload: { coordinates }
});
