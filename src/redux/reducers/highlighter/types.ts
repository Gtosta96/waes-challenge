import { Action } from 'redux';

import { EColors } from '../../models/colors';

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
  readonly text: string;
  readonly selectedColor: string;
  readonly colors: EColors[];
  readonly highlightsSelectedColor: string;
  readonly highlights: {
    [color: string]: Array<{
      colStart: number;
      colEnd: number;
      text: string;
    }>;
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
