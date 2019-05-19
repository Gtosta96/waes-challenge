import './ColorButton.css';

import React from 'react';

interface IProps {
  color: string;
  activeColor: string;
  onClick: (color: string) => void;
}

const ColorButton = (props: IProps) => (
  <button
    type="button"
    className={`btn color-button-component animate
      ${props.color}
      ${props.activeColor === props.color ? "activeColor" : ""}`}
    onClick={() => props.onClick(props.color)}
  />
);

export default ColorButton;
