import React, { Component } from 'react';

import { ICoordinates } from '../../../../models/highlighter';
import styles from './HighlightMarker.module.scss';

interface IProps {
  content: string;
  coordinates: ICoordinates[];
  onHighlight: (coordinate: Partial<ICoordinates>) => void;
}

class HighlightMarker extends Component<IProps> {
  private ref = React.createRef<HTMLDivElement>();

  public onHighlight = () => {
    const selection = document.getSelection().getRangeAt(0);
    const text = selection.toString();

    if (!text) {
      return;
    }

    const childNodes = Array.from(this.ref.current.childNodes);

    const length = childNodes.slice(0, -1).reduce((prev, childNode) => {
      return prev + childNode.textContent.length;
    }, 0);

    this.props.onHighlight({
      colStart: length + selection.startOffset,
      colEnd: length + selection.endOffset,
      text
    });
  };

  public highlightContentFromCoordinates = () => {
    const content = this.props.content;
    const coordinates = this.props.coordinates;

    if (coordinates.length === 0) {
      return this.props.content;
    }

    // const start = content.substring(0, coordinates[0].colStart);
    // const end = content.substring(coordinates[coordinates.length - 1].colEnd, content.length);

    // return (
    //   <>
    //     <span>{start}</span>
    //     {this.props.coordinates.map((coordinate, i, allCordinates) => {
    //       const highlight = <span className={styles[coordinate.color]}>{coordinate.text}</span>;

    //       return highlight;
    //     })}
    //     <span>{end}</span>
    //   </>
    // );

    return this.props.coordinates.reduce((prev: string, coordinate: ICoordinates) => {
      const replacement = prev.replace(
        coordinate.text,
        `<span class="${styles[coordinate.color]}">${coordinate.text}</span>`
      );

      return replacement;
    }, this.props.content);
  };

  public render() {
    return (
      <div
        ref={this.ref}
        onMouseUp={this.onHighlight}
        dangerouslySetInnerHTML={{ __html: this.highlightContentFromCoordinates() }}
      />

      // <div ref={this.ref} onMouseUp={this.onHighlight}>
      //   {this.highlightContentFromCoordinates()}
      // </div>
    );
  }
}

export default HighlightMarker;
