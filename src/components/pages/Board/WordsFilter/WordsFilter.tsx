import React from 'react';

import { ICoordinates } from '../../../../models/highlighter';
import styles from './WordsFilter.module.scss';

interface IProps {
  text: string;
  highlights: ICoordinates[];
  activeColor: string;
}
const WordsFilter = (props: IProps) => {
  function getHighlightedTextByColor() {
    return (
      <ul>
        {props.highlights.map(coordinate => {
          // const highlight = props.text.substring(coordinate.colStart, coordinate.colEnd);

          return <li key={Math.random()}>{coordinate.text}</li>;
        })}
      </ul>
    );
  }

  return (
    <div className={`${styles.wordsFilter} ${styles[props.activeColor]} animate`}>
      {getHighlightedTextByColor()}
    </div>
  );
};

WordsFilter.defaultProps = {
  highlights: []
};

export default WordsFilter;
