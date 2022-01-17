import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

function CMACalendar(props) {
    const [value, setValue] = React.useState(new Date());
    return ( 
    <>
    
        <LocalizationProvider className='cma-calender' dateAdapter={AdapterDateFns}>
        <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    
    </> );
}

export default CMACalendar;