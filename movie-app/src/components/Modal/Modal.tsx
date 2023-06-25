import React from 'react';
import './style.css';
interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onConfirm,
    onCancel,
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-title">{title}</h2>
                <p className="modal-description">{description}</p>
                <p className="modal-question">
                    Do you want to add this movie to favorites?
                </p>
                <div className="modal-actions">
                    <button className="modal-confirm" onClick={onConfirm}>
                        Yes
                    </button>
                    <button className="modal-cancel" onClick={onCancel}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
