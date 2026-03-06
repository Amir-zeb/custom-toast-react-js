import React, { useContext, useEffect } from 'react';
import { ToastContext } from '../context/toast-context';
import './toast.scss';

function Toast() {
    const { state, removeToast } = useContext(ToastContext);
    const { toast } = state;

    return (
        <>
            {toast.length ? <div className="toast_container">
                {toast.length && toast.map((item) => (
                    <Item item={item} key={item.id} removeToast={removeToast} />
                ))}
            </div> : <></>
            }
        </>
    );
}

const Item = ({ item, removeToast }) => {
    const { message, type, duration } = item;

    useEffect(() => {
        setTimeout(() => {
            removeToast(item.id);
        }, duration);
    }, []);

    const hideToast = () => {
        removeToast(item.id);
    }

    return <div className={`${type}_toast __toast`}>
        <div>
            <p className="toast_title">{type}</p>
            <p className="toast_message">{message}</p>
        </div>
        <button onClick={hideToast} aria-label="close" className='close_button'>&times;</button>
    </div>
}

export default Toast;