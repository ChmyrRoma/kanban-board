import React, { useState, useEffect } from 'react';
import { Box, Menu, Autocomplete, TextField } from '@mui/material';
import { useAppSelector } from '../../../../store/hooks';
import useDebounce from '../../../shared/hooks/useDebounce/useDebounce';

import SettingsIcon from '@mui/icons-material/Settings';
import styles from './EventsPage.module.scss';

interface IProps {
  title: string
  city: string
  description: string
  img: string | undefined
}

const Events = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [dataFilter, setDataFilter] = useState<[] | IProps[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { places } = useAppSelector(state => state.events)

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOption = (event: React.MouseEvent<HTMLButtonElement>) => {
    setInputValue(event.target.innerText)
  }

  const debouncedInput = useDebounce(inputValue, 500)

  useEffect(() => {
    setDataFilter(places.filter((el) => el.title.includes(inputValue)))
  }, [debouncedInput])

  return (
    <Box className={styles.eventsPage}>
      <Box className={styles.eventsPage__filter}>
        <Box className={styles.eventsPage__filter_input}>
          <input placeholder="Filters" value={inputValue} onChange={handleSearch} />
          <Box onClick={handleClick} className={styles.eventsPage__filter_gear}>
            <SettingsIcon fontSize="small" />
          </Box>
        </Box>
        <Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Autocomplete
              options={places.map(el => el.city)}
              className={styles.eventsPage__filter_menu}
              onChange={(event) => handleOption(event)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filter by city"
                  onClick={() => setInputValue('')}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      '& fieldset': {
                        border: '0.5px solid white'
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: { color: 'black', opacity: '0.5' },
                  }}
                />
              )}
            />
          </Menu>
        </Box>
      </Box>
      <Box className={styles.eventsPage__container}>
        { dataFilter.map(el => (
          <Box className={styles.eventsPage__content} key={el.city}>
            <Box className={styles.eventsPage__content_image}>
              <img src={el.img} alt="image"/>
            </Box>
            <Box className={styles.eventsPage__contentBlock}>
              <Box>
                <Box className={styles.eventsPage__contentBlock_title}>{el.title}</Box>
                <Box className={styles.eventsPage__contentBlock_info}>
                  <p><b>City: {el.city}</b> </p>
                  <p><b>Description: {el.description}</b> </p>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Events
