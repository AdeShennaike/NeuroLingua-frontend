import  { useState } from 'react';
import { sendFeedback } from '../../services/quizService';

const Feedback = ({ isOpen, onClose, quizId }) => {
  const [message, setMessage] = useState('')
  const [good, setGood] = useState(false)

  const handleFeedbackSubmit = (message, good) => {

    sendFeedback(message, quizId, good)
  };

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleFeedbackSubmit(message, quizId, good)
        onClose()
      }}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 text-sm font-bold mr-2">Good:</label>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked={good} onChange={(e) => setGood(e.target.checked)} />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
          <button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Feedback;
