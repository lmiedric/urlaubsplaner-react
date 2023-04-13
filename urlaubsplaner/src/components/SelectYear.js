import { Select, MenuItem } from '@mui/material';

const SelectYear = (props) => {
    const {selectedYear, currentYear, onChange} = props;

    function generateArrayOfYears() {
        const years = [];

        for (let i = currentYear; i <= currentYear + 100; i++) {
            years.push(i);
        }

        return years;
    }

    return (
        <Select id='years'
            value={selectedYear}
            label="Jahr"
            onChange={onChange}>

            {generateArrayOfYears().map((item, index) =>
                <MenuItem key={index} value={item}>{item}</MenuItem>
            )}
        </Select>
    );
};

export default SelectYear;