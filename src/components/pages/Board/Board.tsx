import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { EColors } from '../../../redux/models/colors';
import { highlightText, updateColor, updateFilterColor } from '../../../redux/reducers/highlighter';
import styles from './Board.module.scss';
import ColorFilter from './ColorFilter/ColorFilter';
import HighlightMarker from './HighlightMarker/HighlightMarker';
import WordsFilter from './WordsFilter/WordsFilter';

interface IStateProps {
  colors: EColors[];
  text: string;
  textColorFilter: string;
  highlights: any;
  highlightsColorFilter: string;
  filteredHighlights: any[];
}

interface IOwnProps {}

interface IDispatchProps {
  highlightText: (text: string) => void;
  updateColor: (text: string) => void;
  updateFilterColor: (text: string) => void;
}

interface IState {}

type IProps = IStateProps & IOwnProps & IDispatchProps;

class Board extends Component<IProps, IState> {
  public onHighlight = (coordinates: any) => {
    this.props.highlightText(coordinates);
  };

  public render() {
    return (
      <div className={styles.board}>
        {/* HIGHLIGHT CONTAINER */}
        <div className={styles.textContainer}>
          <ColorFilter activeColor={this.props.textColorFilter} onClick={this.props.updateColor} />

          <HighlightMarker
            highlights={this.props.highlights}
            activeColor={this.props.textColorFilter}
            onHighlight={this.onHighlight}
            content={this.props.text}
          />
        </div>

        {/* FILTER CONTAINER */}
        <div className={`${styles.filterContainer} ${this.props.highlightsColorFilter}`}>
          <ColorFilter
            activeColor={this.props.highlightsColorFilter}
            onClick={this.props.updateFilterColor}
          />

          <WordsFilter text={this.props.text} highlights={this.props.filteredHighlights} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
  colors: state.todos.colors,
  text: state.todos.text,
  textColorFilter: state.todos.textColorFilter,

  highlights: state.todos.highlights,

  highlightsColorFilter: state.todos.highlightsColorFilter,
  filteredHighlights: state.todos.highlights[state.todos.highlightsColorFilter]
});

const mapDispatchToProps: IDispatchProps = {
  highlightText,
  updateColor,
  updateFilterColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
