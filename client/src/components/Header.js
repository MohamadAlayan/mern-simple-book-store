import React, {useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();

    return (
        <AppBar position='sticky' sx={{backgroundColor: "#444"}}>
            <Toolbar>
                <NavLink to={'/'} style={{color:"white", textDecoration: 'none', display:"flex"}} >
                    <MenuBookIcon />
                    <Typography mx={1} > Book Store</Typography>
                </NavLink>
                <Tabs
                    sx={{ml: "auto"}}
                    textColor='inherit'
                    indicatorColor='secondary'
                    value={value}
                    onChange={(e, val) => setValue(val)}
                >
                    <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
                    <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                    <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Header;