import { Dispatch, SetStateAction,useState } from "react";
import {  Send } from "lucide-react";
import { motion } from "framer-motion";


interface ChatbotProps {
  showChat: boolean;
  setShowChat: Dispatch<SetStateAction<boolean>>;
}

const Chatbot: React.FC<ChatbotProps> = ({ showChat, setShowChat }) => {
  const [messages, setMessages] = useState([
    { text: "Welcome to Gavsewa! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const predefinedResponses: Record<string, string> = {
    "who are you":"I am here to assist you regrading Gausewa Dal Foundation",
    "what is gavsewa": "Gavsewa is a platform dedicated to cow protection and welfare.",
    "how can i donate": "You can donate through our official donation page on the website.",
    "contact details": "You can reach us at support@gavsewa.org or call +91-1234567890.",
    "what work they do":"They rescue, care, vaccinate, and provide food to street or abandoned animals.",
    "how many members are there in the team and what work they do":"They work in unity for animals.",
    "any additional information":"For any additional information, visit the GavRakshakendra website.",
    "is the donation used for animals":"Yes, absolutely! The donation is only used for animal social work."
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const response = predefinedResponses[input.toLowerCase()] || "I'm sorry, I don't have an answer for that.";
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1000);

    setInput("");
  };

  return (
    <div>
      {showChat && (
        <motion.div
          className="fixed bottom-16 right-8 w-80 bg-white shadow-lg rounded-xl overflow-hidden"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
        >
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={() => setShowChat(false)} className="text-white">✖</button>
          </div>
          <div className="p-4 flex flex-col space-y-2 max-h-64 overflow-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="border border-gray-300 rounded-md p-2 flex-grow"
            />
            <button onClick={handleSendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              <Send size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
