import React, { Fragment, PureComponent } from 'react';

import { IHighlight } from '../../../../models/highlighter';
import styles from './HighlightMarker.module.scss';

interface IProps {
  content: string;
  coordinates: IHighlight[];
  onHighlight: (coordinate: Partial<IHighlight>) => void;
}

class HighlightMarker extends PureComponent<IProps> {
  private ref = React.createRef<HTMLDivElement>();

  /**
   * Trigger onHighlight callback sending the coordenates from
   * the selected text by user.
   */
  public onHighlight = () => {
    const selection = document.getSelection().getRangeAt(0);
    const text = selection.toString();

    // Prevents empty selections
    if (!text.trim()) {
      return;
    }

    // Calculates the coordenates based
    const childNodes = Array.from(this.ref.current.childNodes);
    let length = 0;
    let node = childNodes[0];

    while (node !== null && node !== selection.startContainer) {
      const isStartContainer = Array.from(node.childNodes).find(
        x => x === selection.startContainer
      );
      if (isStartContainer) {
        break;
      }

      length += node.textContent.length;
      node = node.nextSibling;
    }

    const colStart = length + selection.startOffset;
    const colEnd = length + selection.endOffset;

    if (colEnd < colStart) {
      console.error("TODO: Improve in order to cross highlights");
      return;
    }

    this.props.onHighlight({ colStart, colEnd, text });
  };

  /**
   * Prints highlights on the text based on the coordinates
   * received from parent component
   */
  public highlightContentFromCoordinates = () => {
    const { content, coordinates } = this.props;

    if (coordinates.length === 0) {
      return content;
    }

    const start = content.substring(0, coordinates[0].colStart);
    const end = content.substring(coordinates[coordinates.length - 1].colEnd, content.length);

    return (
      <>
        <span>{start}</span>
        {coordinates.map((coordinate, i, allCordinates) => {
          const highlight = <span className={styles[coordinate.color]}>{coordinate.text}</span>;

          let next;
          if (i + 1 !== allCordinates.length) {
            next = content.substring(coordinates[i].colEnd, coordinates[i + 1].colStart);
          }

          return (
            <Fragment key={coordinate.colStart}>
              {highlight}
              {next}
            </Fragment>
          );
        })}
        <span>{end}</span>
      </>
    );
  };

  public render() {
    return (
      <div ref={this.ref} onMouseUp={this.onHighlight}>
        {this.highlightContentFromCoordinates()}
      </div>
    );
  }
}

export default HighlightMarker;
