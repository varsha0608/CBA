import './App.css';
import Login from './Login';
import Garage from './Garage';
import Timer from './Timer';
import Counter from './Counter';
import TutorialsListComponent from './tutorials-list.component';
import AddTutorial from './AddTutorial';
import AppUsingReducer from './AppUsingReducer';
import NoPage from './NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppUsingReducer />} />
        <Route index element={<AppUsingReducer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tutorials" element={<TutorialsListComponent />} />
        <Route path="/addTutorials" element={<AddTutorial />} />
        <Route path="/reducerDemo" element={<AppUsingReducer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;