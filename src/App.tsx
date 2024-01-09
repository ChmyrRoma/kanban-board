import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';


import GlobalProvider from './components/providers/GlobalProvider';
import PublicProvider from './components/providers/PublicProvider';
import PrivateProvider from './components/providers/PrivateProvider';
import PublicLayout from './components/layouts/PublicLayout/PublicLayout';
import PrivateLayout from './components/layouts/PrivateLayout/PrivateLayout';

import SignIn from './components/component/business/Authorization/SignIn/SignIn';
import SignUp from './components/component/business/Authorization/SignUp/SignUp';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound';
import EventsPage from './pages/EventsPage/EventsPage';
import SettingsPage from './pages/Settings/SettingsPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalProvider />}>
          <Route element={<PublicProvider />}>
            <Route element={<PublicLayout />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
          </Route>
          <Route element={<PrivateProvider />}>
            <Route element={<PrivateLayout />}>
              <Route path="/events" element={<EventsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
