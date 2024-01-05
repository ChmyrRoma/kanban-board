import React from 'react';
import { Grid, Input } from '@mui/material';

import styles from './PageComponent.module.scss';

interface IProps {
  title: string,
  action?: boolean
  content: IContent
}

interface IContent {
  title: string
  name: string
  description: string
  avatar: string
}

const PageComponent: React.FC<IProps> = ({ title, action, children }) => {
  return (
    <Grid className={styles.page}>
      <Grid className={styles.page__header}>
        <Grid className={styles.page__header_title}>{title}</Grid>
        {action &&  <Grid><button className={styles.page__header_button}>Add Event</button></Grid>}
      </Grid>
      <Grid>
        {children}
      </Grid>
    </Grid>
  )
}

export default PageComponent;
