import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import {Box, InputLabel, MenuItem, Select, FormControl} from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm, SubmitHandler, SubmitErrorHandler, Controller, FormProvider, useFormContext } from 'react-hook-form';

import styles from './AddEvent.module.scss';


interface ICustomInputProps {
  title: string
  formValue: string
}

interface ICustomMenuProps {
  name: string
  label: string
  data: object[]
}

interface IFormProps {
  title: string
  city: string
  eventType: string
  duration: string
  teamOne: string
  teamTwo: string
}

const data = {
  eventType: ['Basketball', 'Football'],
  duration: ['30 minutes', '1 hours', '2 hours']
}


const CustomInput: React.FC<ICustomInputProps> = ({ title, formValue }) => {
  const { control, formState: { errors } } = useFormContext();
  return (
    <div className={styles.customInput}>
      <p className={styles.customInput_title}>{title}</p>
      <Controller
        name={formValue}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            title={title}
            placeholder={title}
            className={styles.customInput_input}
          />
        )}
      />
      <p className={styles.error}> {errors[`${formValue}`] && <span>This field is required</span>}</p>
    </div>
  )
}

const CustomMenu: React.FC<ICustomMenuProps> = ({ name, label, data }) => {
  const { control, register, formState: { errors } } = useFormContext();

  return (
    <Box sx={{ marginTop: '15px' }}>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <FormControl>
            <InputLabel id="demo-simple-select-label" className={styles.menu_label}>{label}</InputLabel>
            <Select
              {...field}
              className={styles.menu_selector}
              label={label}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register(name, { required: true })}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: '1px solid silver' },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: '1px solid silver',
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: '1px solid silver',
                  },
              }}
            >
              {data.map((el, index) => (
                <MenuItem key={index} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <p className={styles.error}> {errors[`${name}`] && <span>This field is required</span>}</p>
    </Box>
  )
}

const AddEvent = () => {
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(dayjs());
  const methods = useForm<IFormProps>()
  const { control, handleSubmit } = methods;

  const submit: SubmitHandler<IFormProps> = (data) => {
    console.log('data', data)
  }

  const error: SubmitErrorHandler<IFormProps> = (eror) => {
    console.log('errors', eror)
  }

  return (
    <form onSubmit={handleSubmit(submit, error)}>
      <FormProvider {...methods} >
        <Box className={styles.addEvent}>
          <CustomMenu name="eventType" label="Event Type" data={data.eventType} />
          <Box className={styles.addEvent__block}>
            <Box><CustomInput title="Title" formValue="title" /></Box>
            <Box><CustomInput title="City" formValue="city" /></Box>
          </Box>
          <Box className={styles.addEvent__block}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'TimePicker']}>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker label="Start date" {...field} value={dateValue} onChange={(newValue) => setDateValue(newValue)} />
                  )}
                />
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <TimePicker label="Start date" {...field} value={dateValue} onChange={(newValue) => setDateValue(newValue)} />
                  )}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <CustomMenu name="duration" label="Duration" data={data.duration} />
          <Box className={styles.addEvent__block}>
            <Box><CustomInput title="Team One" formValue="teamOne" /></Box>
            <Box><CustomInput title="Team Two" formValue="teamTwo" /></Box>
          </Box>
          <Box className={styles.addEvent__block}>
            <button>Create</button>
          </Box>
        </Box>
      </FormProvider>
    </form>

  )
}

export default AddEvent;
