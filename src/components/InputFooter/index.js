import React from 'react';
import ControlledInput from '../ControlledInput';

import SendSvg from '../../assets/images/send.svg';
import "./styles.css";

export default function InputFooter({
  onSendButtonClick,
  onValueChange,
  defaultMessageValue
}) {
  return (
    <div className="input-footer__container">
      <ControlledInput 
        name={'message-input-box'}
        placeholder={"Type your message..."}
        defaultValue={defaultMessageValue}
        onValueChange={onValueChange}
      />
      <img className="send-button" src={SendSvg} alt="send-button" onClick={onSendButtonClick} />
    </div>
  );
}