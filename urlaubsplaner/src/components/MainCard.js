import React, { useEffect, useState } from 'react';
import { Card, CardContent, FormControl, Grid, InputLabel, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Calendars from './Calendars';
import SelectState from './SelectState';
import SelectYear from './SelectYear';
import '../css/MainCard.scss';

const MainCard = () => {
    const currentYear = new Date().getFullYear();
    const [state, setState] = useState('');
    const [selectedYear, setSelectedYear] = useState(currentYear, '');
    const [vacationDaysTotal, setVacationDaysTotal] = useState('');
    const [vacationDaysPlanned, setVacationDaysPlanned] = useState(0);
    const [vacationDaysLeft, setVacationDaysLeft] = useState(0);

    const [januaryStartDate, setJanuaryStartDate] = useState();
    const [januaryEndDate, setJanuaryEndDate] = useState();
    const [februaryStartDate, setFebruaryStartDate] = useState();
    const [februaryEndDate, setFebruaryEndDate] = useState();
    const [marchStartDate, setMarchStartDate] = useState();
    const [marchEndDate, setMarchEndDate] = useState();
    const [aprilStartDate, setAprilStartDate] = useState();
    const [aprilEndDate, setAprilEndDate] = useState();
    const [mayStartDate, setMayStartDate] = useState();
    const [mayEndDate, setMayEndDate] = useState();
    const [juneStartDate, setJuneStartDate] = useState();
    const [juneEndDate, setJuneEndDate] = useState();
    const [julyStartDate, setJulyStartDate] = useState();
    const [julyEndDate, setJulyEndDate] = useState();
    const [augustStartDate, setAugustStartDate] = useState();
    const [augustEndDate, setAugustEndDate] = useState();
    const [septemberStartDate, setSeptemberStartDate] = useState();
    const [septemberEndDate, setSeptemberEndDate] = useState();
    const [octoberStartDate, setOctoberStartDate] = useState();
    const [octoberEndDate, setOctoberEndDate] = useState();
    const [novemberStartDate, setNovemberStartDate] = useState();
    const [novemberEndDate, setNovemberEndDate] = useState();
    const [decemberStartDate, setDecemberStartDate] = useState();
    const [decemberEndDate, setDecemberEndDate] = useState();
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

    useEffect(() => {
        setVacationDaysPlanned(calcVacationDaysPlanned());
    }, [januaryStartDate,
        februaryStartDate,
        marchStartDate,
        aprilStartDate,
        mayStartDate,
        juneStartDate,
        julyStartDate,
        augustStartDate,
        septemberStartDate,
        octoberStartDate,
        novemberStartDate,
        decemberStartDate]);

    useEffect(() => {
        setVacationDaysLeft(vacationDaysTotal - vacationDaysPlanned);
    }, [vacationDaysTotal, vacationDaysPlanned]);

    function handleVacationsDaysTotalChange(event) {
        const value = event.target.value;
        
        if (value > 0) {
            setVacationDaysTotal(value);
            setVacationDaysLeft(value - vacationDaysPlanned);
        }
        else {
            // TODO: Error when negative value
        }
    }

    function handleStatesChange(event) {
        setState(event.target.value);
    }

    function handleYearsChange(event) {
        setSelectedYear(event.target.value);
    }

    function handleCalendarsChange(dates) {
        let [startDate, endDate] = dates;
        let month = startDate.getMonth();
    
        // save chosen date range for respective month
        setStartDateList[month](startDate);
        setEndDateList[month](endDate);
    }

    function calcVacationDaysPlanned() {
        let vacationDaysPlanned = 0;
        
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

            if (startDate && endDate) {
                let difference = endDate.getTime() - startDate.getTime();
                vacationDaysPlanned += Math.ceil(difference / (1000 * 3600 * 24));
            }
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
                            onChange={handleCalendarsChange} />
                    </LocalizationProvider>
                </div>
            </CardContent>
        </Card>
    );
}

export default MainCard;