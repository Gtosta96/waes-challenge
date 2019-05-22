import { IHighlight } from '../../../../models/highlighter';
import { handleHighlights } from '../../highlighter/helpers';

describe("reducers/highlighter/helpers.tsx", () => {
  it("should remove highlights with same coordinates", () => {
    const highlights: IHighlight[] = [
      {
        colStart: 6,
        colEnd: 12
      }
    ];

    const highlight: IHighlight = {
      colStart: 6,
      colEnd: 12
    };

    const parsedHighlights = handleHighlights(highlights, highlight);
    const expectation = [highlight]; // should ignore previous highlights with the same coordinates

    expect(parsedHighlights).toEqual(expectation);
  });

  it("should concat and sort highlights", () => {
    const highlights: IHighlight[] = [
      {
        colStart: 10,
        colEnd: 15
      },
      {
        colStart: 2,
        colEnd: 8
      }
    ];

    const highlight: IHighlight = {
      colStart: 20,
      colEnd: 30
    };

    const parsedHighlights = handleHighlights(highlights, highlight);
    const expectation = [
      {
        colStart: 2,
        colEnd: 8
      },
      {
        colStart: 10,
        colEnd: 15
      },
      {
        colStart: 20,
        colEnd: 30
      }
    ];

    expect(parsedHighlights).toEqual(expectation);
  });
});
