import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import reportWebVitals, {sendToAnalytics} from './Performance/reportWebVitals';
import * as ServiceWorker from './Utils/ServiceWorker/serviceWorkerRegistration';
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
    <App />
    </Provider>
  </React.StrictMode>
);

ServiceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
// reportWebVitals(sendToAnalytics);
