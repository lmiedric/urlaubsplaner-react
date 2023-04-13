import React, { useState } from 'react';
import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { LocalizationProvider, StaticDateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import isLeapYear from '../utils';
import './MainCard.css';

const MainCard = () => {
    const [state, setState] = useState('');
    const [year, setYear] = useState('');
    const [vacationDaysTotal, setVacationDaysTotal] = useState('');
    const [vacationDaysPlanned, setVacationDaysPlanned] = useState(0);
    const [vacationDaysLeft, setVacationDaysLeft] = useState(0);

    const currentYear = new Date().getFullYear();
    const januaryFirst = new Date(currentYear, 0, 1);
    const januaryLast = new Date(currentYear, 0, 31);
    const [januaryStartDate, setJanuaryStartDate] = useState('');
    const [januaryEndDate, setJanuaryEndDate] = useState('');
    const februaryFirst = new Date(currentYear, 1, 1);
    const februaryLast = isLeapYear(currentYear) ? new Date(currentYear, 1, 29) : new Date(currentYear, 1, 28);
    const marchFirst = new Date(currentYear, 2, 1);
    const marchLast = new Date(currentYear, 2, 31);
    const aprilFirst = new Date(currentYear, 3, 1);
    const aprilLast = new Date(currentYear, 3, 30);
    const mayFirst = new Date(currentYear, 4, 1);
    const mayLast = new Date(currentYear, 4, 31);
    const juneFirst = new Date(currentYear, 5, 1);
    const juneLast = new Date(currentYear, 5, 30);
    const julyFirst = new Date(currentYear, 6, 1);
    const julyLast = new Date(currentYear, 6, 31);
    const augustFirst = new Date(currentYear, 7, 1);
    const augustLast = new Date(currentYear, 7, 31);
    const septemberFirst = new Date(currentYear, 8, 1);
    const septemberLast = new Date(currentYear, 8, 30);
    const octoberFirst = new Date(currentYear, 9, 1);
    const octoberLast = new Date(currentYear, 9, 31);
    const novemberFirst = new Date(currentYear, 10, 1);
    const novemberLast = new Date(currentYear, 10, 30);
    const decemberFirst = new Date(currentYear, 11, 1);
    const decemberLast = new Date(currentYear, 11, 31);

    const handleChange = (event) => {
        const target = event.target;
    
        if (target) {
            switch (target.id) {
                case 'vacationDaysTotal':
                    setVacationDaysTotal(target.value);
                    setVacationDaysLeft(target.value - vacationDaysPlanned);
                    break;
                default:
                    setState(target.value);
                    break;
            }
        }
        else {
            setJanuaryStartDate(event[0]);
            setJanuaryEndDate(event[1]);
        }
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
                            onChange={handleChange} />
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
                            <Select id="states"
                                value={state}
                                label="Bundesland"
                                onChange={handleChange}>
                                
                                <MenuItem value='Baden-Württemberg'>Baden-Württemberg</MenuItem>
                                <MenuItem value='Bayern'>Bayern</MenuItem>
                                <MenuItem value='Berlin'>Berlin</MenuItem>
                                <MenuItem value='Brandenburg'>Brandenburg</MenuItem>
                                <MenuItem value='Bremen'>Bremen</MenuItem>
                                <MenuItem value='Hamburg'>Hamburg</MenuItem>
                                <MenuItem value='Hessen'>Hessen</MenuItem>
                                <MenuItem value='Mecklenburg-Vorpommern'>Mecklenburg-Vorpommern</MenuItem>
                                <MenuItem value='Niedersachsen'>Niedersachsen</MenuItem>
                                <MenuItem value='Nordrhein-Westfalen'>Nordrhein-Westfalen</MenuItem>
                                <MenuItem value='Rheinland-Pfalz'>Rheinland-Pfalz</MenuItem>
                                <MenuItem value='Saarland'>Saarland</MenuItem>
                                <MenuItem value='Sachsen'>Sachsen</MenuItem>
                                <MenuItem value='Sachsen-Anhalt'>Sachsen-Anhalt</MenuItem>
                                <MenuItem value='Schleswig-Holstein'>Schleswig-Holstein</MenuItem>
                                <MenuItem value='Thüringen'>Thüringen</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="yearsLabel">Jahr</InputLabel>
                            <Select id='years'
                                value={year}
                                defaultValue={currentYear}
                                label="Jahr"
                                onChange={handleChange}>

                                <MenuItem value="2023">2023</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <div id="calendarContainer">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDateRangePicker defaultCalendarMonth={dayjs(new Date(currentYear, 0, 1))}
                            displayWeekNumber={true}
                            minDate={dayjs(januaryFirst)}
                            maxDate={dayjs(januaryLast)}
                            className="vacationCalendar"
                            onChange={handleChange} />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(februaryFirst)}
                            minDate={dayjs(februaryFirst)}
                            maxDate={dayjs(februaryLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(marchFirst)}
                            minDate={dayjs(marchFirst)}
                            maxDate={dayjs(marchLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(aprilFirst)}
                            minDate={dayjs(aprilFirst)}
                            maxDate={dayjs(aprilLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(mayFirst)}
                            minDate={dayjs(mayFirst)}
                            maxDate={dayjs(mayLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(juneFirst)}
                            minDate={dayjs(juneFirst)}
                            maxDate={dayjs(juneLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(julyFirst)}
                            minDate={dayjs(julyFirst)}
                            maxDate={dayjs(julyLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(augustFirst)}
                            minDate={dayjs(augustFirst)}
                            maxDate={dayjs(augustLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(septemberFirst)}
                            minDate={dayjs(septemberFirst)}
                            maxDate={dayjs(septemberLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(octoberFirst)}
                            minDate={dayjs(octoberFirst)}
                            maxDate={dayjs(octoberLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(novemberFirst)}
                            minDate={dayjs(novemberFirst)}
                            maxDate={dayjs(novemberLast)}
                            className="vacationCalendar" />
                        <StaticDateRangePicker displayWeekNumber={true}
                            defaultCalendarMonth={dayjs(decemberFirst)}
                            minDate={dayjs(decemberFirst)}
                            maxDate={dayjs(decemberLast)}
                            className="vacationCalendar" />
                    </LocalizationProvider>
                </div>
            </CardContent>
        </Card>
    );
}

export default MainCard;