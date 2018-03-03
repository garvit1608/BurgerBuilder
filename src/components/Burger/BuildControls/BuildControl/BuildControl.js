import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
  <div>
    <div className={classes.Label}>{props.label}</div>
    <button classeName={classes.Less}>Less</button>
    <button classeName={classes.More}>More</button>
  </div>
);

export default buildControl;