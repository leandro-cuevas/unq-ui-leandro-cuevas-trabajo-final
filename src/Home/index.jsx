import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/play">
                <button className={"button"}>Comenzar</button>
            </Link>
        </div>
    );
};

export default Home;