import VacationCalendar from "./VacationCalendar";

const Calendars = (props) => {
    const {selectedYear, setStartDateList, setEndDateList, onChange} = props;

    return (
        <>
            {[...Array(12)].map((item, index) =>
                <VacationCalendar key={index}
                    shownDate={new Date(selectedYear, index, 1)}
                    setStartDateList={setStartDateList}
                    setEndDateList={setEndDateList}
                    onChange={onChange} />
            )}
        </>
    );
};

export default Calendars;