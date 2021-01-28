import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import store from './reducer/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
