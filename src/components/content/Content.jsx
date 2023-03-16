import React from 'react';
import style from './Content.module.scss';
const Content = () => {
  return (
    <div className={style.root}>
      <h1>New Release</h1>
      <div>slider</div>
      <div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
      </div>
    </div>
  );
};

export default Content;
