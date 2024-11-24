import react, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState('Hello World.');
  const displayMessage = () => {
    setDisplay(message || 'Hello World.');
  };

  return (
    <div className="App">
      <label htmlFor="message">Message To Display:</label>
      <input
        id="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={displayMessage}>Display Message</button>
      <h2>{display}</h2>
    </div>
  );
}
export default App;