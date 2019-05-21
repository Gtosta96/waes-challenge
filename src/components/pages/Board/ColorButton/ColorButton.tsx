import React from 'react';

import styles from './ColorButton.module.scss';

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
      className={`
        ${styles.colorButton}
        ${styles[props.color]}
        ${props.activeColor === props.color ? styles.activeColor : ""}
        animate
      `}
      onClick={onClick}
    />
  );
};

export default ColorButton;
