## Custom Toast Component in React.js

A simple and customizable toast notification component built with React.js.

## Live Demo

Check out the live demo of the custom toast component [here](https://amir-zeb.github.io/custom-toast-react-js/).

## Features

- Display different types of toast notifications (error, success, info, warning, message).
- Auto-hide toasts after a specified duration.
- Manually dismiss toasts.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/amir-zeb/custom-toast-react-js.git
    ```

2. Navigate to the project directory:
    ```sh
    cd custom-toast-react-js
    ```sh

3. Install the dependencies:
    ```sh
    npm install
    ```sh

## Usage

1. Import the ToastProvider and wrap your application with it:
    ```sh
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import { ToastProvider } from './context/toast-context';

    ReactDOM.render(
    <ToastProvider>
        <App />
    </ToastProvider>,
    document.getElementById('root')
    );
    ```sh

2. Use the Toast component in your application:
    ```sh
    import React from 'react';
    import Toast from './components/Toast';
    function App() {
    return (
        <div className="App">
            <h1>Custom Toast Component</h1>
            <Toast />
            {/* Your other components */}
        </div>
    );
    }
    export default App;
    ```sh

3. Add toasts using the addToast function provided by the ToastContext:
    ```sh
    import React, { useContext } from 'react';
    import { ToastContext } from './context/toast-context';
    function MyComponent() {
        const { addToast } = useContext(ToastContext);
        const showToast = () => {
            addToast({
            type: 'success',
            message: 'This is a success toast!',
            duration: 3000,
            });
        };
        return (
            <button onClick={showToast}>Show Toast</button>
        );
    }
    export default MyComponent;
    ```sh

## Customization

You can customize the toast appearance by modifying the toast.scss file.