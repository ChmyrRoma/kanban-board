import React from 'react';

import PageComponent from '../../components/shared/PageComponent/PageComponent';
import Events from '../../components/component/business/Events/Events';

interface IState {
  city: string
  description: string
  img: null
}

const data: IState[] = [
  { city: "Kiev", description: "place", img: null },
  { city: "London", description: "place", img: null },
  { city: "Lviv", description: "place", img: null }
]

const EventsPage = () => {
  return (
    <PageComponent title="Events Page" action>
      <Events data={data} />
    </PageComponent>
  )
}

export default EventsPage;
