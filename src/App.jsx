import { BrowserRouter } from 'react-router-dom';
import RouterApp from './Router';
import './App.css'

const App = () => {
  return (
<div className={"GeneralGame"}>
    <div className={"Title"}>Quizz</div>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
</div>
  );
};

export default App;