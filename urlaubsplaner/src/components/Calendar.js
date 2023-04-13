import { DateRangeCalendar, DateRangePicker, DesktopDateRangePicker, StaticDateRangePicker } from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';
import isLeapYear from '../utils';

const Calendar = (props) => {
    const {selectedYear, month, onChange} = props;

    let lastDay;
    switch (month) {
        // months with 31 days
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            lastDay = 31;
            break;
        // months with 30 days
        case 3:
        case 5:
        case 8:
        case 10:
            lastDay = 30;
            break;
        // February
        case 1:
            lastDay = isLeapYear(selectedYear) ? 29 : 28;
            break;
        default:
            throw new Error('Illegal Parameter! A Number between 0 and 11 is expected.');
    }

    const firstOfMonth = new Date(selectedYear, month, 1);
    const lastOfMonth = new Date(selectedYear, month, lastDay);

    return (
        <DateRangeCalendar displayWeekNumber={true} calendars={1}
            minDate={dayjs(firstOfMonth)}
            maxDate={dayjs(lastOfMonth)}
            className="vacationCalendar"
            onChange={onChange}>
        </DateRangeCalendar>
    );
}

export default Calendar;