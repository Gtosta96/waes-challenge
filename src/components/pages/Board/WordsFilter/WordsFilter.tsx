import React from 'react';

import { IHighlight } from '../../../../models/highlighter';
import styles from './WordsFilter.module.scss';

interface IProps {
  text: string;
  highlights: IHighlight[];
  activeColor: string;
}
const WordsFilter = (props: IProps) => {
  /**
   * Renders the the highlights
   */
  function getHighlightedTextByColor() {
    return (
      <ul>
        {props.highlights.map(coordinate => {
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
