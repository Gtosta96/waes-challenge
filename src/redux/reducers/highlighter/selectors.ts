import { IAppState } from '../../configureStore';

/**
 * Here is placed all highlighter's selectors/re-selectors.
 *
 * That way if a refactory is needed on highlighter's state,
 * all the property paths are placed together.
 */
export const getHighlighterColors = (state: IAppState) => state.todos.colors;

export const getHighlighterText = (state: IAppState) => state.todos.text;

export const getHighlighterTextColorFilter = (state: IAppState) => state.todos.textColorFilter;

export const getHighlighterCoordinates = (state: IAppState) => state.todos.highlights;

export const getHighlighterHighlightsColorFilter = (state: IAppState) =>
  state.todos.highlightsColorFilter;

export const getHighlighterFilteredHighlights = (state: IAppState) =>
  state.todos.highlights.filter(highlight => highlight.color === state.todos.highlightsColorFilter);
