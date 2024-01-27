import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import './LoginForm.module.css';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  });

  const handleChange = (e) => {
    props.updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(formData);
      props.handleSignupOrLogin();
      navigate('/quiz');
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  const handleClear = () => {
    setFormData({
      email: '',
      pw: '',
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white/80 p-8 rounded-md shadow-md md:w-96 w-full mt-[-80px]">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-500 text-sm">
              Email
            </label>
            <input
              type="text"
              autoComplete="off"
              id="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="border border-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-500 text-sm">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={formData.pw}
              name="pw"
              onChange={handleChange}
              className="border border-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
            />
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              className="text-white bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 w-full md:w-auto"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-500 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300 w-full md:w-auto mt-2 md:mt-0"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;








