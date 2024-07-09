import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SelectDifficulty from './SelectDifficulty';
import Game from './Game';
import NoExist from './NoExist';

const RouterApp = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<SelectDifficulty />} />
        <Route path="/play/:difficulty" element={<Game />} />
        <Route path="*" element={<NoExist />} />
    </Routes>
);

export default RouterApp;