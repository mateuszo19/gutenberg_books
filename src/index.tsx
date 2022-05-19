import React from 'react';
import ReactDOM from 'react-dom/client';
// import {App} from './components/App/App';
import {Header} from './components/Header/Header';
import {ItemList} from './components/ItemList/ItemList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Header/>
      <ItemList/>
  </React.StrictMode>
);

