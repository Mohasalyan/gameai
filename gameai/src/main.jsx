import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css';
import App from './components/App';
/** Redux Store */
import store from './redux/store';
import { Provider } from 'react'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <App />
  </Provider>
  ,
)