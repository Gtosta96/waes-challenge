import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { EColors } from '../../../redux/models/colors';
import { highlightText, updateColor, updateFilterColor } from '../../../redux/reducers/highlighter';
import HighlightMarker from '../../shared/HighlightMarker/HighlightMarker';
import styles from './Board.module.scss';
import ColorFilter from './ColorFilter/ColorFilter';
import WordsFilter from './WordsFilter/WordsFilter';

interface IProps {
  classes?: any;
  text: string;
  highlights: any[];
  highlightsOnMarker: any[];
  colors: EColors[];
  highlightText: (text: string) => void;
  updateColor: (text: string) => void;
  updateFilterColor: (text: string) => void;
  selectedColor: string;
  highlightsSelectedColor: string;
}

interface IState {}

class Board extends Component<IProps, IState> {
  public onHighlight = (coordinates: any) => {
    this.props.highlightText(coordinates);
  };

  public render() {
    return (
      <div className={styles.board}>
        {/* HIGHLIGHT CONTAINER */}
        <div className={styles.textContainer}>
          <ColorFilter activeColor={this.props.selectedColor} onClick={this.props.updateColor} />

          <HighlightMarker
            highlights={this.props.highlightsOnMarker}
            onHighlight={this.onHighlight}
            content={this.props.text}
          />
        </div>

        {/* FILTER CONTAINER */}
        <div className={styles.filterContainer}>
          <ColorFilter
            activeColor={this.props.highlightsSelectedColor}
            onClick={this.props.updateFilterColor}
          />

          <WordsFilter text={this.props.text} highlights={this.props.highlights} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  colors: state.todos.colors,
  text: state.todos.text,

  highlightsOnMarker: state.todos.highlights[state.todos.selectedColor],
  selectedColor: state.todos.selectedColor,

  highlightsSelectedColor: state.todos.highlightsSelectedColor,
  highlights: state.todos.highlights[state.todos.highlightsSelectedColor]
});

const mapDispatchToProps = {
  highlightText,
  updateColor,
  updateFilterColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
