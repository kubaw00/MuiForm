import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';

import { DevTool } from '@hookform/devtools';
import {
  MenuItem,
  InputLabel,
  Select,
  Stack,
  FormControl,
  TextField,
  Button,
  FormHelperText,
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

type FormValues = {
  kontynent: string;
  imie: string;
  nazwisko: string;
  data_urodzenia: Date | string | number;
};

const kontynenty: string[] = [
  'Afryka',
  'Azja',
  'Ameryka Południowa',
  'Ameryka Północna',
  'Australia',
  'Europa',
  'Antarktyda',
];

export default function MuiForm() {
  const {
    register,
    handleSubmit,
    formState,
    control,
    getValues,
    reset,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      kontynent: '',
      imie: '',
      nazwisko: '',
      data_urodzenia: '',
    },
    mode: 'all',
  });

  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      alert('Sukces!');
    }
  }, [isSubmitSuccessful, reset]);

  let disabled = false;
  const dateOfBirth = watch('data_urodzenia');

  if (typeof dateOfBirth === 'number') {
    const dateNow = new Date().getTime();
    const diffInMs = dateNow - dateOfBirth;
    if (diffInMs < 0) {
      disabled = true;
    } else {
      disabled = false;
    }
    const howOldUser = diffInMs / (1000 * 3600 * 24 * 365);
    if (howOldUser > 60) {
      document.documentElement.style.fontSize = '2rem';
    } else {
      document.documentElement.style.fontSize = '1rem';
    }
  }

  return (
    <>
      <div style={{ width: '500px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Formularz</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={4} width={500}>
            <FormControl fullWidth>
              <InputLabel id='simple-select-label'>Kontynent</InputLabel>
              <Select
                defaultValue={''}
                labelId='simple-select-label'
                id='kontynent'
                label='Kontynent'
                {...register('kontynent', {
                  validate: (fieldValue: string) =>
                    fieldValue !== 'Europa' ||
                    getValues().nazwisko.length >= 2 ||
                    'Nie spełnione kryteria',
                })}
                error={!!errors.kontynent}
              >
                {kontynenty.map((el, index) => (
                  <MenuItem key={index} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.kontynent?.message}</FormHelperText>
            </FormControl>
            <FormControl>
              <TextField
                label='Imię'
                type='text'
                {...register('imie', { required: 'To pole jest wymagane' })}
                error={!!errors.imie}
                helperText={errors.imie?.message}
              />
            </FormControl>
            <FormControl>
              <TextField
                label='Nazwisko'
                type='text'
                {...register('nazwisko')}
              />
            </FormControl>

            <Controller
              control={control}
              name='data_urodzenia'
              render={({ field }) => {
                return (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        label='Data urodzenia'
                        value={field.value ? dayjs(field.value) : null}
                        onChange={(date) => {
                          field.onChange(date ? date.valueOf() : null);
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                );
              }}
            />
            <Button
              disabled={disabled ? disabled : false}
              type='submit'
              variant='contained'
              color='primary'
            >
              Wyślij
            </Button>
          </Stack>
        </form>
      </div>
      <DevTool control={control} />
    </>
  );
}
