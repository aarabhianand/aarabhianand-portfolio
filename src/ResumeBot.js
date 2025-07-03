import React, { useState } from 'react';
import axios from 'axios';

const ResumeBot = () => {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/chat', {
        query: input,
      });
      setReply(res.data.reply);
    } catch (err) {
      setReply("Error: Could not get a response.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Resume Chatbot</h2>
      <input
        type="text"
        value={input}
        placeholder="Ask a question..."
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '60%', padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      <div style={{ marginTop: '1rem', backgroundColor: '#f3f3f3', padding: '1rem' }}>
        <strong>Bot reply:</strong>
        <p>{reply}</p>
      </div>
    </div>
  );
};

export default ResumeBot;
