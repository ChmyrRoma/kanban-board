import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import MainPage from './components/MainPage';
import SignIn from './components/Authorization/SignIn/SignIn';
import SignUp from './components/Authorization/SignUp/SignUp';

import './App.css'

function App() {

  React.useEffect(() => {
    fetch('https://my-json-server.typicode.com/ChmyrRoma/kanban-board/posts')
      .then((data) => console.log(data))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
