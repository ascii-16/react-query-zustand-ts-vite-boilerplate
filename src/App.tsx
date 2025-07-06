import { ToastContainer } from 'react-toastify';
import Header from '@/components/ui/header';
import Router from './routes';
import { AppProvider } from './provider';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App h-screen">
        <Header />
        <Router />
      </div>
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
