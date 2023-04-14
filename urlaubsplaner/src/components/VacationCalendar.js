import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/VacationCalendar.scss';

const VacationCalendar = (props) => {
    const {shownDate, onChange} = props;

    return(
        <Calendar showWeekNumbers={true}
            showNeighboringMonth={false}
            activeStartDate={shownDate}
            minDetail='month'
            maxDetail='month'
            selectRange={true}
            onChange={onChange} />
    );
};

export default VacationCalendar;