import React from 'react';

import "./styles.css";

export default function SingleMessageBox({ content, side }) {
  return (
    <div className="single-msg-box__container">
      <div className={`single-msg-box__wrapper ${side}`}>
        {content}
      </div>
    </div>
  );
}