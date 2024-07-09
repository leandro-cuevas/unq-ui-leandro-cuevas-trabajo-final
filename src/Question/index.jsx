import { useEffect, useState } from 'react';
import { sendAnswer } from '../service/api';
import Option from '../Option';
import ModalMessage from '../ModalMessage';
import Loader from "../Loader/index.jsx";

const Question = ({
                      actual,
                      setCurrentQuestion,
                      setCorrectAnswers,
                      correctAnswers,
                      setError,
                      isLoaded,
                  }) => {
    const { id, question, ...options } = actual;
    const [answerStatus, setAnswerStatus] = useState('');
    const [optionSelected, setOptionSelected] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmitAnswer = async (option) => {
        if (optionSelected) return;
        setOptionSelected(option);
        sendAnswer({ questionId: id, option })
            .then((res) => {
                setCorrectAnswers((prev) => prev + (res.answer ? 1 : 0));
                setAnswerStatus(res.answer ? 'correct' : 'incorrect');
                setIsModalOpen(true); // Opens the modal for both correct and incorrect answers
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    useEffect(() => {
        let timer;
        if (isModalOpen) {
            timer = setTimeout(() => {
                setIsModalOpen(false); // Closes the modal automatically
                setAnswerStatus('');
                setOptionSelected('');
                setCurrentQuestion((x) => x + 1);
            }, 2000); // Adjust time as needed
        }
        return () => clearTimeout(timer);
    }, [isModalOpen, setCurrentQuestion]);

    if (!isLoaded) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <div>
            <div className={"internStyle"}>Counter: {correctAnswers}</div>
            <div className={"internStyle"}>{question}</div>
            <ModalMessage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} answerStatus={answerStatus} />
            <div className={answerStatus}>
                {Object.entries(options).map(([optionKey, optionValue]) => (
                    <Option
                        key={optionKey}
                        option={optionValue}
                        onClick={() => onSubmitAnswer(optionKey)}
                        isSelected={optionSelected === optionKey}
                        answerStatus={answerStatus}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;