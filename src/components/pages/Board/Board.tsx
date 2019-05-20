import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../../redux/configureStore';
import { EColors } from '../../../redux/models/colors';
import { ICoordinates } from '../../../redux/models/highlighter';
import { highlightText, updateColor, updateFilterColor } from '../../../redux/reducers/highlighter';
import {
  getHighlighterColors,
  getHighlighterCoordinates,
  getHighlighterFilteredHighlights,
  getHighlighterHighlightsColorFilter,
  getHighlighterText,
  getHighlighterTextColorFilter,
} from '../../../redux/reducers/highlighter/selectors';
import styles from './Board.module.scss';
import ColorFilter from './ColorFilter/ColorFilter';
import HighlightMarker from './HighlightMarker/HighlightMarker';
import WordsFilter from './WordsFilter/WordsFilter';

interface IStateProps {
  colors: EColors[];
  text: string;
  textColorFilter: EColors | string;
  highlights: any;
  highlightsColorFilter: string;
  filteredHighlights: any[];
}

interface IOwnProps {}

interface IDispatchProps {
  highlightText: (coordinate: ICoordinates) => void;
  updateColor: (color: string) => void;
  updateFilterColor: (color: string) => void;
}

interface IState {}

type IProps = IStateProps & IOwnProps & IDispatchProps;

/**
 * Board (Container Component)
 * I personally like to keep my Container/Connected components as Classes
 */
class Board extends Component<IProps, IState> {
  public onHighlight = (coordinates: Partial<ICoordinates>) => {
    this.props.highlightText({ ...coordinates, color: this.props.textColorFilter });
  };

  public render() {
    return (
      <div className={styles.board}>
        {/* HIGHLIGHT CONTAINER */}
        <div className={styles.textContainer}>
          <ColorFilter activeColor={this.props.textColorFilter} onClick={this.props.updateColor} />

          <HighlightMarker
            coordinates={this.props.highlights}
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
  colors: getHighlighterColors(state),
  text: getHighlighterText(state),
  textColorFilter: getHighlighterTextColorFilter(state),

  highlights: getHighlighterCoordinates(state),

  highlightsColorFilter: getHighlighterHighlightsColorFilter(state),
  filteredHighlights: getHighlighterFilteredHighlights(state)
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
