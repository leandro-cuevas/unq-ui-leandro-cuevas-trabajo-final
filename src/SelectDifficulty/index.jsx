import { useEffect, useState } from 'react';
import { getDifficulty } from '../service/api';
import { Link } from 'react-router-dom';
import Loader from "../Loader/index.jsx";
import './index.css';

const SelectDifficulty = () => {
    const [difficulty, setDifficulty] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getDifficulty()
            .then((response) => {
                setDifficulty(response);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <div>
            <div className={"selecter"}>Select the difficulty level of the game</div>
            <div>
                {difficulty.map((level) => (
                    <div key={level}>
                        <Link to={`/play/${level}`}>
                            <button className={"button"}>{level}</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectDifficulty;