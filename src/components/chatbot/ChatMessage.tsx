import React from "react";
import ChatbotIcon from "./ChatbotIcon";

// ✅ Add 'export' here so other files can use this type
export interface ChatMessageData {
  role: "model" | "user";
  text: string;
  isError?: boolean;
}

interface ChatMessageProps {
  chat: ChatMessageData;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
  if (!chat) return <div>No chat data</div>;

  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>
      {chat.role === "model" && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
