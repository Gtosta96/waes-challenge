import React, { Component } from 'react';

import { ICoordinates } from '../../../../redux/models/highlighter';

interface IProps {
  content: string;
  coordinates: ICoordinates[];
  onHighlight: (coordinate: Partial<ICoordinates>) => void;
}

class HighlightMarker extends Component<IProps> {
  private ref = React.createRef<HTMLDivElement>();

  public onHighlight = () => {
    const selection = document.getSelection();

    if (
      selection &&
      selection.type === "Range" &&
      selection.focusNode.parentElement.nodeName !== "SPAN"
    ) {
      this.props.onHighlight({
        colStart: selection.anchorOffset,
        colEnd: selection.focusOffset,
        text: selection.toString()
      });
    }
  };

  public highlightContentFromCoordinates = () => {
    return this.props.coordinates.reduce((prev: string, coordinate: ICoordinates) => {
      return prev.replace(
        coordinate.text,
        `<span class="${coordinate.color}">${coordinate.text}</span>`
      );
    }, this.props.content);
  };

  public render() {
    return (
      <div
        ref={this.ref}
        onMouseUp={this.onHighlight}
        dangerouslySetInnerHTML={{ __html: this.highlightContentFromCoordinates() }}
      />
    );
  }
}

export default HighlightMarker;
