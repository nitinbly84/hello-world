import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewApp from './NewApp';
import ReducerApp from './reducerComponents/reducerApp';
import Container from './containerComponents/ContainerApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // commented below tag else few lifecylce methods were executed twice
    // https://stackoverflow.com/questions/63512052/lifecycle-methods-gets-called-twice-at-initial-render-and-at-re-render-phase#:~:text=Please%20check%20your%20index.js%2C%20if%20your%20App.js%20is,just%20need%20to%20unwrap%20your%20App.js%20from%20%3CReact.StrictMode%3E.
    //<React.StrictMode>
    <div>
        {/*< App />
        < NewApp />
        <ReducerApp />*/}
        <Container />
    </div>
    //</React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
