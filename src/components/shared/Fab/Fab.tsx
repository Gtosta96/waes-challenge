import './Fab.css';

import React from 'react';

interface IProps {
  onClick: () => void;
}

const Fab = (props: IProps) => (
  <button type="button" className="btn btn-link animate fab-component" onClick={props.onClick}>
    +
  </button>
);

export default Fab;
