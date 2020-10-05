import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import Spinner from './components/Spinner/Spinner';

function App() {
  const loading = useSelector(state => state.app.loading)
  return (
    <div className="App">
      <Menu />
      <Main />
      {loading && <Spinner />}
    </div>
  );
}

export default App;
