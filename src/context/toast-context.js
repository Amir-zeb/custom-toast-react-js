import React, { createContext, useReducer } from 'react';

// generate Id for Toast
const generateId = () => {
    return Math.floor(Math.random() * 999999);
}

// interface for toast
// interface toastInt{
//   id: 1:number,  
//   type: ["error", "success","info","warning","message"]:string,  
//   message: "lorem ipsum":string,  
//   duration: 1500:number,
// }

// Initial state
const initialState = {
    toast: [], // toast array
};

// Reducer
const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TOAST':
            return { ...state, toast: [...state.toast, { id: generateId(),...payload }] }
        case 'REMOVE_TOAST':
            return {
                ...state,
                toast: state.toast.filter(({ id }) => id !== payload),
            };
        default:
            return state;
    }
};

// Create context for toast
export const ToastContext = createContext();

// Create provider for toast
export const ToastProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // add toast action
    const addToast = (payload = { type: "info", message: "Custom toast", duration: 3000 }) => {
        dispatch({ type: 'ADD_TOAST', payload: payload });
    };

    // remove toast action
    const removeToast = (payload) => {
        dispatch({ type: 'REMOVE_TOAST', payload: payload });
    };

    return (
        <ToastContext.Provider value={{ state, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};