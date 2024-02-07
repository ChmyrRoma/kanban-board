import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';

import CustomModal from '../CustomModal/CustomModal';
import AddEvent from '../../component/business/AddEvent/AddEvent';

import styles from './PageComponent.module.scss';

interface IProps {
  title: string,
  action?: boolean
  children: IContent
}

interface IContent {
  title: string
  name: string
  description: string
  avatar: string
}

const PageComponent: React.FC<IProps> = ({ title, action, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <Box className={styles.page}>
      <Box className={styles.page__header}>
        <Box className={styles.page__header_title}>{title}</Box>
        {action && (
          <Box>
            <button className={styles.page__header_button} onClick={handleChange}>Add Event</button>
            {isOpen && <CustomModal handleChange={handleChange}><AddEvent /></CustomModal>}
          </Box>
        )}
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  )
}

export default PageComponent;
