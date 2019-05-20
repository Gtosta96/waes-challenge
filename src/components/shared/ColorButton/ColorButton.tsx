import './ColorButton.css';

import React from 'react';

interface IProps {
  color: string;
  activeColor: string;
  onClick: (color: string) => void;
}

const ColorButton = (props: IProps) => {
  function onClick() {
    props.onClick(props.color);
  }

  return (
    <button
      type="button"
      className={`btn color-button-component animate
      ${props.color}
      ${props.activeColor === props.color ? "activeColor" : ""}`}
      onClick={onClick}
    />
  );
};

export default ColorButton;
