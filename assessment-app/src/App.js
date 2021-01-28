import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
    </BrowserRouter>
  );
}

export default App;
