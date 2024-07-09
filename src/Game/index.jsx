import { useEffect, useState } from 'react';
import { getQuestions} from '../service/api';
import { Link, useParams } from 'react-router-dom';
import Question from "../Question/index.jsx";
import Loader from "../Loader/index.jsx";
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
                .then((res) => {
                    setQuestion(res);
                })
                .catch((e) => {
                    setError(e.message);
                })
                .finally(() => {
                    setIsLoaded(true);
                });
        }
    }, [difficulty]);

    if (!isLoaded) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    const resetGame = () => {
        setCurrentQuestion(0);
        setCorrectAnswers(0);
        setQuestion([{}])
    };

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
                        <button className={"button"} onClick={resetGame}>Play again!</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Game;