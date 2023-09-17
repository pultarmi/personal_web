import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './styles/TimelineBox.css';
import router from 'router';
import {RouterProvider} from "react-router-dom";

const App = () => {
  return <RouterProvider router={router} />;
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>
    );
}

// ReactDOM.render(<Router />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((metric: any) => {
    console.log(metric);
});
