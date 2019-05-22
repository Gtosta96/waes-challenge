import { IAppState } from '../../configureStore';

/**
 * Here is placed all highlighter's selectors/re-selectors.
 *
 * That way if a refactory is needed on highlighter's state,
 * all the property paths are placed together.
 */
export const getHighlighterColors = (state: IAppState) => state.highlighter.colors;

export const getHighlighterText = (state: IAppState) => state.highlighter.text;

export const getHighlighterTextColorFilter = (state: IAppState) =>
  state.highlighter.textColorFilter;

export const getHighlighterCoordinates = (state: IAppState) => state.highlighter.highlights;

export const getHighlighterHighlightsColorFilter = (state: IAppState) =>
  state.highlighter.highlightsColorFilter;

export const getHighlighterFilteredHighlights = (state: IAppState) =>
  state.highlighter.highlights.filter(
    highlight => highlight.color === state.highlighter.highlightsColorFilter
  );
