import React from 'react';
import { ChatHeader, InputFooter, MessageList } from '../../components';

import BotProfilImage from '../../assets/images/profile-icon.jpg';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../utilities/utils';

const vertices = Object.freeze({
  source: "ME",
  target: "BOT"
});
const STORAGE_KEY = "messages";

export default function App() {
  const [messages, setMessages] = React.useState(getItemFromLocalStorage(STORAGE_KEY) || []);
  const [inputMessage, setInputMessage] = React.useState("");

  React.useEffect(() => {
    if (messages.length > 0) setItemToLocalStorage(STORAGE_KEY, messages);
  }, [messages, messages.length]);

  const handleInputValueChange = (e) => {
    setInputMessage(e);
  }

  const handleSendButtonClick = () => {
    const payload = {
      source: vertices.source,
      target: vertices.target,
      timestamp: new Date().getTime(),
      message: inputMessage
    };
    
    setInputMessage("");
    setMessages((prev) => ([...prev, payload]));
    setTimeout(() => {
      const botPayload = {
        source: vertices.target,
        target: vertices.source,
        timestamp: new Date().getTime(),
        message: inputMessage
      };
      setMessages((prev) => {
        const payload = [...prev, botPayload]
        return payload;
      });
    }, 300);
  }

  return (
    <div className="App__container">
      <div className="App__wrapper">
        <ChatHeader title="Amber" icon={BotProfilImage} />
        <MessageList
          messages={
            messages.sort((a, b) => a.timestamp - b.timestamp)
          }
          source={vertices.source} 
          target={vertices.target} 
        />
        <InputFooter
          onValueChange={handleInputValueChange}
          onSendButtonClick={handleSendButtonClick}
          defaultMessageValue={inputMessage}
        />
      </div>
    </div>
  );
};