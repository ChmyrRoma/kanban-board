import React from 'react'
import { Box } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import styles from './CustomModal.module.scss';

interface IProps {
  handleChange: () => boolean
}

const CustomModal: React.FC<IProps> = ({ children, handleChange }) => {
  return (
    <Box className={styles.customModal}>
      <Box className={styles.customModal_container}>
        <Box className={styles.customModal__header}>
          <div onClick={handleChange} className={styles.customModal__header_button}><CloseIcon fontSize="small" /></div>
          <Box className={styles.customModal__content}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CustomModal;
