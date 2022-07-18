import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";

const DurationTabs = ({ duration, handleDurationChange }) => {
    return <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        disableElevation
    >
        <Button
            onClick={() => handleDurationChange()}
            variant={!duration ? "contained" : "outlined"}
        >
            From beginning
        </Button>
        <Button
            onClick={() => handleDurationChange(365)}
            variant={duration === 365 ? "contained" : "outlined"}
        >
            Last year
        </Button>
        <Button
            onClick={() => handleDurationChange(30)}
            variant={duration === 30 ? "contained" : "outlined"}
        >
            Last month
        </Button>
        <Button
            onClick={() => handleDurationChange(7)}
            variant={duration === 7 ? "contained" : "outlined"}
        >
            Last week
        </Button>

    </ButtonGroup>

};
export default DurationTabs;