import React from 'react';

import PageComponent from '../../components/shared/PageComponent/PageComponent';
import Events from '../../components/component/business/Events/Events';


const EventsPage = () => {
  return (
    <PageComponent title="Events Page" action>
      <Events />
    </PageComponent>
  )
}

export default EventsPage;
