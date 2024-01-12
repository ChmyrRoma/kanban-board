import React, { useState } from 'react';
import { Grid } from '@mui/material';

import styles from './EventsPage.module.scss';

interface IProps {
  city: string
  description: string
  img: null
}

const Events: React.FC<IProps> = ({ data }) => {
  const [value, setValue] = useState('');

  const handleSearch = (event) => {
    setValue(event.target.value)
  }

  const dataFiltered = data.filter((el) => el.city.includes(value));

  return (
    <Grid className={styles.eventsPage}>
      <Grid className={styles.eventsPage__filter}>
        <input placeholder="Filters" onChange={handleSearch} />
      </Grid>
      <Grid className={styles.eventsPage__container}>
        { dataFiltered.map(el => (
          <Grid className={styles.eventsPage__content} key={el.city}>
            <Grid className={styles.eventsPage__content_image}>
              <img src={el.img} alt="image"/>
            </Grid>
            <Grid className={styles.eventsPage__contentBlock}>
              <Grid>
                <Grid className={styles.eventsPage__contentBlock_title}>Title</Grid>
                <Grid className={styles.eventsPage__contentBlock_info}>
                  <p><b>City: {el.city}</b> </p>
                  <p><b>Description: {el.description}</b> </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Events
