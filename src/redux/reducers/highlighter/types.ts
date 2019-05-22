import { Action } from 'redux';

import { EColors } from '../../../models/colors';
import { IHighlight } from '../../../models/highlighter';

/**
 * Actions
 */
export enum EActions {
  UPDATE_TEXT_COLOR_FILTER = "@highlighter/UPDATE_TEXT_COLOR_FILTER",
  UPDATE_FILTER_COLOR = "@highlighter/UPDATE_FILTER_COLOR",
  HIGHLIGHT_TEXT = "@highlighter/HIGHLIGHT_TEXT"
}

/**
 * State
 */
export interface IState {
  readonly colors: EColors[];

  readonly text: string;
  readonly textColorFilter: string;

  readonly highlightsColorFilter: string;
  readonly highlights: IHighlight[];
}

/**
 * Action Creators
 */
export interface IUpdateColor extends Action<EActions.UPDATE_TEXT_COLOR_FILTER> {
  payload: { color: string };
}

export interface IUpdateFilterColor extends Action<EActions.UPDATE_FILTER_COLOR> {
  payload: { color: string };
}

export interface IHighlightText extends Action<EActions.HIGHLIGHT_TEXT> {
  payload: { coordinates: IHighlight };
}

export type IHighlightActions = IUpdateColor | IUpdateFilterColor | IHighlightText;
