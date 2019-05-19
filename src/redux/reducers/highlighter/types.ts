import { Action } from 'redux';

import { EColors } from '../../models/colors';
import { ICoordinates } from '../../models/highlighter';

/**
 * Actions
 */
export enum EActions {
  UPDATE_COLOR = "@todos/UPDATE_COLOR",
  UPDATE_FILTER_COLOR = "@todos/UPDATE_FILTER_COLOR",
  HIGHLIGHT_TEXT = "@todos/ADD_TODO"
}

/**
 * State
 */
export interface IState {
  readonly colors: EColors[];

  readonly text: string;
  readonly textColorFilter: string;

  readonly highlightsColorFilter: string;
  readonly highlights: {
    [color: string]: ICoordinates[];
  };
}

/**
 * Action Creators
 */
export interface IUpdateColor extends Action<EActions.UPDATE_COLOR> {
  payload: { color: any };
}

export interface IUpdateFilterColor extends Action<EActions.UPDATE_FILTER_COLOR> {
  payload: { color: any };
}

export interface IHighlightText extends Action<EActions.HIGHLIGHT_TEXT> {
  payload: { coordinates: any };
}
