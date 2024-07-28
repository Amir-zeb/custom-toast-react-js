import './App.scss';
import { useContext, useState } from 'react';
import Toast from './components/Toast';
import { ToastContext } from './context/toast-context';

function App() {
  const [toastSetting, setToastSetting] = useState({
    type: "info",
    message: "lorem ipsum",
    duration: 3000,
    position: "bottom-right",
  });
  const { type, duration, message } = toastSetting;
  const { addToast } = useContext(ToastContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setToastSetting(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className='app_container'>
      <h1>Custom Toast</h1>
      <div className='inputs_container'>
        <label htmlFor="">Type</label>
        <select name="type" value={type} onChange={handleInputChange}>
          <option value="info">Info</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="success">Success</option>
          <option value="message">simple message</option>
        </select>
        <label htmlFor="">Duration</label>
        <input type='text' name='duration' value={duration} onChange={handleInputChange} />
        <label htmlFor="">Message</label>
        <textarea type='text' rows='5' name='message' value={message} onChange={handleInputChange} />
      </div>
      <button
        type='button'
        aria-label='add toast'
        onClick={() => addToast(toastSetting)}
      >
        Add Toast
      </button>
      <Toast />
    </div>
  )
}

export default App;
