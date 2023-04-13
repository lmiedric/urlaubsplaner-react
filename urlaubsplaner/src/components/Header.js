import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from '@mui/icons-material';
import '../css/Header.css';

const Header = () => {
    function handleClick(event) {
        // TODO
    }

    return (
        <AppBar id='header' position='static'>
            <Toolbar>
                <IconButton size='large'
                    edge='start'
                    sx={{ mr: 2 }}
                    color='inherit'
                    onClick={handleClick}>
                    
                    <Menu />
                </IconButton>
                
                <Typography>Urlaubsplaner</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;