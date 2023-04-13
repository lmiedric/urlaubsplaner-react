import {Select, MenuItem } from '@mui/material';

const SelectState = (props) => {
    const {state, onChange} = props;

    return (
        <Select id="states"
            value={state}
            label="Bundesland"
            onChange={onChange}>
                                    
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
    );
};

export default SelectState;