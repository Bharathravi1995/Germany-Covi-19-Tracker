import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
const NavBar = () => {
    return <AppBar position="relative">
        <Box textAlign='center' justifyContent='center'>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Covid 19 Tracker - Germany
                </Typography>
            </Toolbar>
        </Box>
    </AppBar>

}

export default NavBar;