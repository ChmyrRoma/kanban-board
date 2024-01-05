import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';


import PublicProvider from './components/providers/PublicProvider';
import PrivateProvider from './components/providers/PrivateProvider';
import PublicLayout from './components/component/PublicLayout/PublicLayout';
import PrivateLayout from './components/component/PrivateLayout/PrivateLayout';

import SignIn from './components/component/PublicLayout/Authorization/SignIn/SignIn';
import SignUp from './components/component/PublicLayout/Authorization/SignUp/SignUp';
import MainPageContainer from './components/component/PrivateLayout/MainPage/MainPageContainer';
import SettingsContainer from './components/component/PrivateLayout/Settings/SettingsContainer';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicProvider />}>
          <Route element={<PublicLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Route>
        <Route element={<PrivateProvider />}>
          <Route element={<PrivateLayout />}>
            <Route path="/mainPage" element={<MainPageContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
