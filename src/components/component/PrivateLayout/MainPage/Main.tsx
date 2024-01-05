import React from 'react';
import { Grid } from '@mui/material';

import styles from './MainPage.module.scss';

interface IProps {
  city: string
  description: string
  img: null
}

const Main: React.FC<IProps> = ({ data }) => {

  return (
    <Grid className={styles.mainPage}>
      <Grid className={styles.mainPage__filter}>
        <input placeholder="Filters" />
      </Grid>
      <Grid className={styles.mainPage__container}>
        { data.map(el => (
          <Grid className={styles.mainPage__content}>
            <Grid className={styles.mainPage__content_image}>
              <img src={el.img} alt="image"/>
            </Grid>
            <Grid className={styles.mainPage__contentBlock}>
              <Grid>
                <Grid className={styles.mainPage__contentBlock_title}>Title</Grid>
                <Grid className={styles.mainPage__contentBlock_info}>
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

export default Main
