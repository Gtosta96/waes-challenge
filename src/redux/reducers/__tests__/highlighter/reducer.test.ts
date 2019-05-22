import { EColors } from '../../../../models/colors';
import reducer, { highlightText, INITIAL_STATE, updateFilterColor, updateTextColorFilter } from '../../highlighter/reducer';
import { IState } from '../../highlighter/types';

describe("reducers/highlighter/reducer.tsx", () => {
  let storeObject: IState;
  beforeEach(() => {
    storeObject = reducer(undefined, { type: "INIT", payload: null });
  });

  it("should highlightText", () => {
    const color = EColors.PINK as string;
    const expectation: IState = { ...INITIAL_STATE, textColorFilter: color };

    const action = updateTextColorFilter(color);
    storeObject = reducer(storeObject, action);

    expect(storeObject).toEqual(expectation);
  });

  it("should updateFilterColor", () => {
    const color = EColors.PINK as string;
    const expectation: IState = { ...INITIAL_STATE, highlightsColorFilter: color };

    const action = updateFilterColor(color);
    storeObject = reducer(storeObject, action);

    expect(storeObject).toEqual(expectation);
  });

  it("should updateTextColorFilter", () => {
    const highlight = {
      colStart: 0,
      colEnd: 5,
      text: "Lorem I",
      color: EColors.PINK as string
    };

    const expectation = { ...INITIAL_STATE, highlights: [highlight] };
    const action = highlightText(highlight);

    storeObject = reducer(storeObject, action);

    expect(storeObject).toEqual(expectation);
  });
});
