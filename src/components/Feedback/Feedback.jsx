import  { useState } from 'react';

const Feedback = ({ isOpen, onClose, onSubmit }) => {
  const [message, setMessage] = useState('');
  const [good, setGood] = useState(false);

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 100 }}>
      <h2>Feedback</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ message, good });
      }}>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div>
          <label>Good:</label>
          <input type="checkbox" checked={good} onChange={(e) => setGood(e.target.checked)} />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default Feedback;
