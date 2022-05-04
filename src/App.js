import './App.css';
import './service/firebase';
import './components/Header';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './provider/AuthProvider';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
      <Footer />
    </AuthProvider>
  );
}

export default App;
