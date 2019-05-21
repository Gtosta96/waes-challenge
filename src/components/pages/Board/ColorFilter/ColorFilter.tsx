import React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../../../redux/configureStore';
import { getHighlighterColors } from '../../../../redux/reducers/highlighter/selectors';
import ColorButton from '../ColorButton/ColorButton';
import styles from './ColorFilter.module.scss';

interface IProps {
  colors: string[];
  activeColor: string;
  onClick: (color: string) => void;
}

const ColorFilter = (props: IProps) => (
  <div className={styles.colorsContainer}>
    {props.colors.map(color => (
      <ColorButton
        key={color}
        color={color}
        activeColor={props.activeColor}
        onClick={props.onClick}
      />
    ))}
  </div>
);

const mapStateToProps = (state: IAppState) => ({
  colors: getHighlighterColors(state)
});

export default connect(mapStateToProps)(ColorFilter);
