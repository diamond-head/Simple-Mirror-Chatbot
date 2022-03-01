import React from 'react';
import './styles.css';

export default function ChatHeader({ title, icon, ...props }) {
  return (
    <div className="chat-header__container">
      <div className="chat-header__icon">
        <img src={icon} alt='header-profile-icon'/>
      </div>
      <div className="chat-header__title">
        {title}
      </div>
    </div>
  );
}