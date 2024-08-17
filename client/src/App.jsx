import { useState, useEffect } from 'react'
import axios from'axios';
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('/api');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div><h1>Hello from React!</h1><p>{message}</p></div>
  );
}

export default App
