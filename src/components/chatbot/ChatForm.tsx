import React, { useRef } from "react";

type Role = "user" | "model";

export interface ChatMessage {
  role: Role;
  text: string;
}

interface ChatFormProps {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  generateBotResponse: (history: ChatMessage[]) => Promise<void> | void;
}

const ChatForm: React.FC<ChatFormProps> = ({
  setChatHistory,
  generateBotResponse,
  chatHistory,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    // Clear input
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // Update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Add a "Thinking..." placeholder for the bot's response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      // Call the function to generate the bot's response
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 600);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message...."
        className="message-input"
        required
      />
      <button type="submit" className="material-symbols-rounded">
        keyboard_arrow_up
      </button>
    </form>
  );
};

export default ChatForm;
