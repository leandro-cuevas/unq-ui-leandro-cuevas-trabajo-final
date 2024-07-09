import './index.css';

const Option = ({ option, onClick, isSelected, isCorrect, isIncorrect }) => {

    return (
        <div>
            <button className={"button"} onClick={onClick}>
                {option}
            </button>
        </div>
    );
};

export default Option;