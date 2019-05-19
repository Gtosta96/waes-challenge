import React, { Component } from 'react';

export interface IHighlightMarkerCoordenates {
  colStart: number;
  colEnd: number;
  text: string;
}

interface IProps {
  content: string;
  highlights: any[];
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
    return this.props.highlights.reduce((prev, coordinates) => {
      const update = prev.replace(coordinates.text, `<strong>${coordinates.text}</strong>`);

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
