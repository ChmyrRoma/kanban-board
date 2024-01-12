import React from 'react';

import PageComponent from '../../components/shared/PageComponent/PageComponent';
import Events from '../../components/component/business/Events/Events';

interface IState {
  city: string
  description: string
  img: string | null
}

const data: IState[] = [
  { city: "Kiev", description: "Place in Kiev", img: "kiev.jpg" },
  { city: "London", description: "Place in London", img: "london.jpg" },
  { city: "Lviv", description: "Place in Lviv", img: "lviv.jpg" },
  { city: "New York", description: "Place in New York", img: "newyork.jpg" },
  { city: "Tokyo", description: "Place in Tokyo", img: "tokyo.jpg" },
  { city: "Sydney", description: "Place in Sydney", img: "sydney.jpg" },
  { city: "Paris", description: "Place in Paris", img: "paris.jpg" },
  { city: "Berlin", description: "Place in Berlin", img: "berlin.jpg" },
  { city: "Rome", description: "Place in Rome", img: "rome.jpg" },
  { city: "Barcelona", description: "Place in Barcelona", img: "barcelona.jpg" },
];

const EventsPage = () => {
  return (
    <PageComponent title="Events Page" action>
      <Events data={data} />
    </PageComponent>
  )
}

export default EventsPage;
