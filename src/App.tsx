import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Page from './components/Page';
import SignIn from './components/component/PublicLayout/Authorization/SignIn/SignIn';
import SignUp from './components/component/PublicLayout/Authorization/SignUp/SignUp';
import PublicLayout from './components/component/PublicLayout/PublicLayout';
import PublicProvider from './components/providers/PublicProvider';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound';
import Settings from './components/component/PrivateLayout/Settings/Settings';
import MainPage from './components/component/PrivateLayout/MainPage/MainPage';

import PrivateLayout from './components/component/PrivateLayout/PrivateLayout';
import PrivateProvider from './components/providers/PrivateProvider';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route element={<PublicProvider />}>
          <Route element={<PublicLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Route>
        <Route element={<PrivateProvider />}>
          <Route element={<PrivateLayout />}>
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
