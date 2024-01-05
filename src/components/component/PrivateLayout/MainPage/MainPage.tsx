import React from 'react';

import PageComponent from '../PageComponent/PageComponent';
import Main from './Main';

interface IState {
  city: string
  description: string
  img: null
}

const data: IState[] = [
  { city: "Kiev", description: "place", img: null },
  { city: "Kiev", description: "place", img: null },
  { city: "Kiev", description: "place", img: null }
]

const MainPage = () => {
  return (
    <PageComponent title="Main Page" action>
      <Main data={data} />
    </PageComponent>
  )
}

export default MainPage;
