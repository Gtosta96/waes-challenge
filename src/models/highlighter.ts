import { EColors } from './colors';

export interface IHighlight {
  colStart?: number;
  colEnd?: number;
  text?: string;
  color?: EColors | string;
}
