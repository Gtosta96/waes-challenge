import React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../../../redux/configureStore';

interface IProps {
  text: string;
  highlights: any[];
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

const mapStateToProps = (state: IAppState) => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordsFilter);
