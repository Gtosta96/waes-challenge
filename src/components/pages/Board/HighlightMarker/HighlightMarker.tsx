import React, { Component } from 'react';

import { ICoordinates } from '../../../../redux/models/highlighter';

export interface IHighlightMarkerCoordenates {
  colStart: number;
  colEnd: number;
  text: string;
}

interface IProps {
  content: string;
  activeColor: string;
  highlights: any;
  onHighlight: (coordinates: IHighlightMarkerCoordenates) => void;
}

class HighlightMarker extends Component<IProps> {
  private ref = React.createRef<HTMLDivElement>();

  public onHighlight = () => {
    const selection = document.getSelection();

    if (selection && selection.type === "Range" && this.ref.current) {
      this.props.onHighlight({
        colStart: selection.anchorOffset,
        colEnd: selection.focusOffset,
        text: selection.toString()
      });
    }
  };

  public highlightContentFromCoordinates = () => {
    return Object.keys(this.props.highlights).reduce((prev, color) => {
      const coordinates = this.props.highlights[color];

      let update = prev;
      coordinates.forEach((coordinate: ICoordinates) => {
        update = update.replace(
          coordinate.text,
          `<span class="${color}">${coordinate.text}</span>`
        );
      });

      return update;
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
