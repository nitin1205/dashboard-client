import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, useTheme, Toolbar } from '@mui/material';
import { 
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon, 
    Search, 
    SettingsOutlined, 
    ArrowDropDownOutlined 
} from '@mui/icons-material';

import FlexBetween from 'components/FlexBetween';
import { setMode } from 'state';
import profileImage from 'assets/profile.png'

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    return (
        <AppBar
            sx={{
                position: 'static',
                background: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar 
                sx={{
                    justifyContent: 'space-between'
                }}
            >  

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;