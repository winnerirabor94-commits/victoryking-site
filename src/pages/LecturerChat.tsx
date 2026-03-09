import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Send } from 'lucide-react';

const LecturerChat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    { id: 1, sender: 'System', text: 'Welcome to the Lecturers Only Chatroom.', isMe: false },
    { id: 2, sender: 'Prof. Sarah Chukwu', text: 'Please ensure all continuous assessment scores are submitted by Friday.', isMe: false },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { id: Date.now(), sender: user?.name || 'Me', text: input, isMe: true }]);
    setInput('');
  };

  return (
    <div>
      <div className="page-header">
        <h1>Lecturer Chatroom</h1>
        <p>Private discussion channel for UNIDEL faculty and staff.</p>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.isMe ? 'sent' : 'received'}`}>
              {!msg.isMe && <div className="message-sender">{msg.sender}</div>}
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="chat-input" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Type a message to other lecturers..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn" style={{ backgroundColor: '#1565c0' }}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LecturerChat;
