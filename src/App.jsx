import { BrowserRouter } from 'react-router-dom';
import RouterApp from './Router';

const App = () => {
  return (
<div>
    <h1>Preguntados</h1>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
</div>
  );
};

export default App;