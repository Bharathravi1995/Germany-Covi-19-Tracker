import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RegionsDropDown = ({ allRegionCovidData, chosenRegion, handleRegionChange }) => {
    return <FormControl fullWidth>
        <InputLabel>Select a region</InputLabel>
        <Select
            value={chosenRegion}
            label="Select a region"
            onChange={handleRegionChange}
        >
            {Object.entries(allRegionCovidData).map(([key, value], index) => {
                return <MenuItem value={key} key={index}>{value.name}</MenuItem>
            })}
        </Select>
    </FormControl>
}

export default RegionsDropDown;