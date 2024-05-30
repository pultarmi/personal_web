import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import './styles/TimelineBox.module.scss';
import router from 'router';

const App = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
if (root) {
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
}

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals((metric: any) => {
    console.log(metric);
});

reportWebVitals(console.log);