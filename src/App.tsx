import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import SignIn from './components/Authorization/SignIn';
import SignUp from './components/Authorization/SignUp';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>S</div>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
