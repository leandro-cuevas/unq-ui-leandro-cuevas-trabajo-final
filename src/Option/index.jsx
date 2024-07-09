import './index.css';

const Option = ({ option, onClick }) => {

    return (
        <div>
            <button className={"optionButton"} onClick={onClick}>
                {option}
            </button>
        </div>
    );
};

export default Option;