import React from 'react';

import { ICoordinates } from '../../../../redux/models/highlighter';

interface IProps {
  text: string;
  highlights: ICoordinates[];
}
const WordsFilter = (props: IProps) => {
  function getHighlightedTextByColor() {
    return (
      <ul>
        {props.highlights.map(coordinate => {
          const highlight = props.text.substring(coordinate.colStart, coordinate.colEnd);

          return <li key={Math.random()}>{highlight}</li>;
        })}
      </ul>
    );
  }

  return <div>{getHighlightedTextByColor()}</div>;
};

WordsFilter.defaultProps = {
  highlights: []
};

export default WordsFilter;
