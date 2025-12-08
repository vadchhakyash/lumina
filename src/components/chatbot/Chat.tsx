import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { type ChatMessageData } from "./ChatMessage";

// type Role = "user" | "model";

const Chat: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessageData[]>([]);
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const generateBotResponse = async (history: ChatMessageData[]): Promise<void> => {
    // Helper to replace "Thinking..." with the real response
    const updateHistory = (text: string, isError: boolean = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    // Map to Gemini-style structure
    const mappedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOption: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: mappedHistory }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL as string, requestOption);
      const data = await response.json();

      if (!response.ok) {
        const message =
          (data?.error?.message as string | undefined) || "Something went wrong!";
        throw new Error(message);
      }

      const apiResponseText: string = (data.candidates?.[0]?.content?.parts?.[0]?.text ?? "")
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      const err = error as Error;
      updateHistory(err.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
