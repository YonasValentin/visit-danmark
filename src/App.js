import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<DiscoverPage />} />
      </Routes>
    </div>
  );
}

export default App;
