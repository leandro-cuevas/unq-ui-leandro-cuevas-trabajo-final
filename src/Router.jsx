import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SelectDifficulty from './SelectDifficulty';
import Game from './Game';

const RouterApp = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<SelectDifficulty />} />
        <Route path="/play/:difficulty" element={<Game />} />
    </Routes>
);

export default RouterApp;