import { IHighlight } from '../../../models/highlighter';

/**
 * Prevents different highlights with same coordenates
 * Also, sort highlights by coordenates (colStart)
 */
export const handleHighlights = (highlights: IHighlight[], payload: IHighlight) => {
  return highlights
    .filter(
      (highlight: IHighlight) =>
        highlight.colStart !== payload.colStart && highlight.colEnd !== payload.colEnd
    )
    .concat(payload)
    .slice() // guarantees immutability
    .sort((a: IHighlight, b: IHighlight) => {
      return a.colStart - b.colStart;
    });
};
