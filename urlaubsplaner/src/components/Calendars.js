import Calendar from "./Calendar";

const Calendars = (props) => {
    const {selectedYear, setStartDateList, setEndDateList, updateVacationDays} = props;

    const handleChange = (event) => {
        const startDate = event[0];
        const endDate = event[1];

        if (startDate) {
            let month = startDate.$M;
            let date = startDate.$d;
            setStartDateList[month](date);
        }

        if (endDate) {
            let month = endDate.$M;
            let date = endDate.$d;
            setEndDateList[month](date);
        }
            
        updateVacationDays();
    };

    return (
        <>
            {[...Array(12)].map((item, index) =>
                <Calendar key={index} selectedYear={selectedYear} month={index} onChange={handleChange} />
            )}
        </>
    );
};

export default Calendars;