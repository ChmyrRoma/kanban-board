import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import MainPage from './components/MainPage';
import SignIn from './components/component/PublicLayout/Authorization/SignIn/SignIn';
import SignUp from './components/component/PublicLayout/Authorization/SignUp/SignUp';
import PublicLayout from './components/component/PublicLayout/PublicLayout';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound';

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
        <Route element={<PublicLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
