import React from 'react';
import SingleMessageBox from '../SingleMessageBox';

import "./styles.css";

const sideStyle = Object.freeze({
  left: 'flex-start',
  right: 'flex-end'
});

export default function MessageList({
  messages,
  source,
  target
}) {
  const listRef = React.useRef(null);
  const getSide = (i) => i.source === source ? "right" : "left";

  React.useEffect(() => {
    if (listRef && listRef.current && listRef.current.scrollTo) {
      listRef.current?.scrollTo(0, listRef.current.scrollHeight);
    }
  }, [messages.length]);

  return (
    <div ref={listRef} className="message-list__container">
      {messages.map((i, idx) => (
        <div key={i.source + ":" + i.target + ":" + i.timestamp}  className="message-item__wrapper" style={{ alignSelf: sideStyle[getSide(i)] }}>
          <SingleMessageBox
            content={i.message}
            side={getSide(i)}
          />
        </div>
      ))}
    </div>
  );
}
