import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/play">
                <button className={"button"}>Start</button>
            </Link>
        </div>
    );
};

export default Home;