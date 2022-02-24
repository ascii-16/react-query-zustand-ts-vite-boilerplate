import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Router from './routes';
import store from '@/store/index';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App font-mono h-screen">
        <Header />
        <Router />
      </div>
      <ToastContainer />
    </Provider>
  );
}

export default App;
