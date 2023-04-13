import React, { useState } from 'react';
import { Card, CardContent, FormControl, Grid, InputLabel, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Calendars from './Calendars';
import SelectState from './SelectState';
import SelectYear from './SelectYear';
import '../css/MainCard.css';

const MainCard = () => {
    const currentYear = new Date().getFullYear();
    const [state, setState] = useState('');
    const [selectedYear, setSelectedYear] = useState(currentYear, '');
    const [vacationDaysTotal, setVacationDaysTotal] = useState('');
    const [vacationDaysPlanned, setVacationDaysPlanned] = useState(0);
    const [vacationDaysLeft, setVacationDaysLeft] = useState(0);

    const [januaryStartDate, setJanuaryStartDate] = useState([null, null]);
    const [januaryEndDate, setJanuaryEndDate] = useState([null, null]);
    const [februaryStartDate, setFebruaryStartDate] = useState([null, null]);
    const [februaryEndDate, setFebruaryEndDate] = useState([null, null]);
    const [marchStartDate, setMarchStartDate] = useState([null, null]);
    const [marchEndDate, setMarchEndDate] = useState([null, null]);
    const [aprilStartDate, setAprilStartDate] = useState([null, null]);
    const [aprilEndDate, setAprilEndDate] = useState([null, null]);
    const [mayStartDate, setMayStartDate] = useState([null, null]);
    const [mayEndDate, setMayEndDate] = useState([null, null]);
    const [juneStartDate, setJuneStartDate] = useState([null, null]);
    const [juneEndDate, setJuneEndDate] = useState([null, null]);
    const [julyStartDate, setJulyStartDate] = useState([null, null]);
    const [julyEndDate, setJulyEndDate] = useState([null, null]);
    const [augustStartDate, setAugustStartDate] = useState([null, null]);
    const [augustEndDate, setAugustEndDate] = useState([null, null]);
    const [septemberStartDate, setSeptemberStartDate] = useState([null, null]);
    const [septemberEndDate, setSeptemberEndDate] = useState([null, null]);
    const [octoberStartDate, setOctoberStartDate] = useState([null, null]);
    const [octoberEndDate, setOctoberEndDate] = useState([null, null]);
    const [novemberStartDate, setNovemberStartDate] = useState([null, null]);
    const [novemberEndDate, setNovemberEndDate] = useState([null, null]);
    const [decemberStartDate, setDecemberStartDate] = useState([null, null]);
    const [decemberEndDate, setDecemberEndDate] = useState([null, null]);
    const setStartDateList = [
        setJanuaryStartDate,
        setFebruaryStartDate,
        setMarchStartDate,
        setAprilStartDate,
        setMayStartDate,
        setJuneStartDate,
        setJulyStartDate,
        setAugustStartDate,
        setSeptemberStartDate,
        setOctoberStartDate,
        setNovemberStartDate,
        setDecemberStartDate
    ];
    const setEndDateList = [
        setJanuaryEndDate,
        setFebruaryEndDate,
        setMarchEndDate,
        setAprilEndDate,
        setMayEndDate,
        setJuneEndDate,
        setJulyEndDate,
        setAugustEndDate,
        setSeptemberEndDate,
        setOctoberEndDate,
        setNovemberEndDate,
        setDecemberEndDate
    ];

    function handleVacationsDaysTotalChange(event) {
        const target = event.target;
        setVacationDaysTotal(target.value);
        setVacationDaysLeft(target.value - vacationDaysPlanned);
    }

    function handleStatesChange(event) {
        setState(event.target.value);
    }

    function handleYearsChange(event) {
        setSelectedYear(event.target.value);
    }

    function updateVacationDays() {
        setVacationDaysPlanned(calcVacationDaysPlanned());
        setVacationDaysLeft(vacationDaysTotal - vacationDaysPlanned);
    }

    function calcVacationDaysPlanned() {
        let vacationDaysPlanned;
        
        for (let i = 0; i < 12; i++) {
            let startDate;
            let endDate;

            switch (i) {
                case 0:
                    startDate = januaryStartDate;
                    endDate = januaryEndDate;
                    break;
                case 1:
                    startDate = februaryStartDate;
                    endDate = februaryEndDate;
                    break;
                case 2:
                    startDate = marchStartDate;
                    endDate = marchEndDate;
                    break;
                case 3:
                    startDate = aprilStartDate;
                    endDate = aprilEndDate;
                    break;
                case 4:
                    startDate = mayStartDate;
                    endDate = mayEndDate;
                    break;
                case 5:
                    startDate = juneStartDate;
                    endDate = juneEndDate;
                    break;
                case 6:
                    startDate = julyStartDate;
                    endDate = julyEndDate;
                    break;
                case 7:
                    startDate = augustStartDate;
                    endDate = augustEndDate;
                    break;
                case 8:
                    startDate = septemberStartDate;
                    endDate = septemberEndDate;
                    break;
                case 9:
                    startDate = octoberStartDate;
                    endDate = octoberEndDate;
                    break;
                case 10:
                    startDate = novemberStartDate;
                    endDate = novemberEndDate;
                    break;
                case 11:
                    startDate = decemberStartDate;
                    endDate = decemberEndDate;
                    break;
                default:
                    throw new Error('Illegal Parameter! A Number between 0 and 11 is expected.');
            }

            let difference = startDate.getTime() - endDate.getTime();
            vacationDaysPlanned += Math.ceil(difference / (1000 * 3600 * 24));
        }

        return vacationDaysPlanned;
    }

    return (
        <Card id="card">
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={4}>
                        <TextField required
                            id="vacationDaysTotal"
                            className='full-width'
                            label="Urlaubstage (gesamt)"
                            value={vacationDaysTotal}
                            onChange={handleVacationsDaysTotalChange} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <TextField disabled
                            id="vacationDaysPlanned"
                            className='full-width'
                            label="Urlaubstage (verplant)"
                            value={vacationDaysPlanned} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <TextField disabled
                            id="vacationDaysLeft"
                            className='full-width'
                            label="Urlaubstage (offen)"
                            value={vacationDaysLeft} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="statesLabel">Bundesland</InputLabel>
                            <SelectState id="statesSelect"
                                state={state}
                                onChange={handleStatesChange} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="yearsLabel">Jahr</InputLabel>
                            <SelectYear id="yearsSelect"
                                selectedYear={selectedYear}
                                currentYear={currentYear}
                                onChange={handleYearsChange} />
                        </FormControl>
                    </Grid>
                </Grid>
                <div id="calendarContainer">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Calendars selectedYear={selectedYear}
                            setStartDateList={setStartDateList}
                            setEndDateList={setEndDateList}
                            updateVacationDays={updateVacationDays} />
                    </LocalizationProvider>
                </div>
            </CardContent>
        </Card>
    );
}

export default MainCard;