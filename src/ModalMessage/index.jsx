import './index.css';

const ModalMessage = ({ isOpen, answerStatus }) => {
    if (!isOpen) return null;

    let message = "Incorrect Answer";
    let contentClass = "modalContent incorrect";
    if (answerStatus === 'correct') {
        message = "¡Correct answer!";
        contentClass = "modalContent correct";
    }

    return (
        <div className="modalBackground">
            <div className={contentClass}>
                <h2>{message}</h2>
            </div>
        </div>
    );
};

export default ModalMessage;