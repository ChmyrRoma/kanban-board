import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import MainPage from './components/MainPage';
import SignIn from './components/component/PublicLayout/Authorization/SignIn/SignIn';
import SignUp from './components/component/PublicLayout/Authorization/SignUp/SignUp';
import PublicLayout from './components/component/PublicLayout/PublicLayout';
import PublicProvider from './components/providers/PublicProvider';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound';

import PrivateLayout from './components/component/PrivateLayout/PrivateLayout';
import PrivateProvider from './components/providers/PrivateProvider';
import Shop from './components/component/PrivateLayout/Shop/Shop';

import './App.css'

function App() {

  React.useEffect(() => {
    fetch('https://my-json-server.typicode.com/ChmyrRoma/kanban-board/main/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((data) => console.log(data))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<PublicProvider />}>
          <Route element={<PublicLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Route>
        <Route element={<PrivateProvider />}>
          <Route element={<PrivateLayout />}>
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
