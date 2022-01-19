import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/posts/:userId/:name" element={<Posts />} />
          <Route path="*" element={
              <main style={{ padding: "1rem", textAlign: "center" }}>
                <p>По этому адресу ничего нет!</p>
              </main>
            }
          />        
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

