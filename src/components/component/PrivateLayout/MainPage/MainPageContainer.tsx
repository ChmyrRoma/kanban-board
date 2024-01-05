import React from 'react';

import PageComponent from '../PageComponent/PageComponent';
import MainPage from './MainPage';

const data = [
  { city: "Kiev", description: "place", img: null },
  { city: "Kiev", description: "place", img: null },
  { city: "Kiev", description: "place", img: null }
]

const MainPageContainer = () => {
  return (
    <PageComponent title="Main Page" action>
      <MainPage data={data} />
    </PageComponent>
  )
}

export default MainPageContainer;
