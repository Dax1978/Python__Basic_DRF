import React from "react";
import "./modal.css"

const Modal = ({ active, handleModalActive, children }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => handleModalActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div >
    );
};

export default Modal;