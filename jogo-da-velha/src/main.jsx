import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './Board.jsx';
import GlobalStyle from './assets/styles/globalStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
     <Board />
    
  </React.StrictMode>
)
