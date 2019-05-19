import './Button.css';

import React from 'react';

interface IProps {
  className?: string;
  onClick?: () => void;
  children: any;
}

const Button = (props: IProps) => (
  <button
    type="button"
    className={`btn btn-link animate button-component ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
