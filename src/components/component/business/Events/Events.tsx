import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../../../../store/hooks';
import useDebounce from '../../../shared/hooks/useDebounce/useDebounce';

import styles from './EventsPage.module.scss';

interface IProps {
  city: string
  description: string
  img: null
}

const Events: React.FC<IProps> = () => {
  const [inputValue, setInputValue] = useState('');
  const [dataFilter, setDataFilter] = useState([]);

  const { places } = useAppSelector(state => state.events)

  const handleSearch = (event) => {
    setInputValue(event.target.value)
  }

  const debouncedInput = useDebounce(inputValue, 500)

  useEffect(() => {
    setDataFilter(places.filter((el) => el.city.includes(inputValue)))
  }, [debouncedInput])

  return (
    <Grid className={styles.eventsPage}>
      <Grid className={styles.eventsPage__filter}>
        <input placeholder="Filters" value={inputValue} onChange={handleSearch} />
      </Grid>
      <Grid className={styles.eventsPage__container}>
        { dataFilter.map(el => (
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
