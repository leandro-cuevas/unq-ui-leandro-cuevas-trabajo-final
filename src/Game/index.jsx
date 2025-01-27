import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getQuestions} from '../service/api';
import Question from "../Question/index.jsx";
import Loader from "../Loader/index.jsx";
import ErrorMessage from "../ErrorMessage/index.jsx";
import './index.css';

const Game = () => {
    const {difficulty} = useParams();
    const [question, setQuestion] = useState([{}]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (difficulty) {
            getQuestions(difficulty)
                .then((response) => {
                    setQuestion(response);
                })
                .catch((e) => {
                    setError(e.message);
                })
                .finally(() => setTimeout(() => {setIsLoaded(true)}, 1000));
        }
    }, [difficulty]);

    if (!isLoaded) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <div>
            {currentQuestion < question.length ? (
                <Question
                    actual={question[currentQuestion]}
                    setCurrentQuestion={setCurrentQuestion}
                    setCorrectAnswers={setCorrectAnswers}
                    correctAnswers={correctAnswers}
                    setError={setError}
                    isLoaded={isLoaded}
                />
            ) : (
                <div>
                    <div className={"internStyle"}>Game over</div>
                    <div className={"internStyle"}>Correct answers: {correctAnswers}</div>
                    <Link to="/play" replace>
                        <button className={"button"}>Play again!</button>
                    </Link>
                </div>
            )}

            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default Game;