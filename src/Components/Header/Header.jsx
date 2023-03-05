import React from "react";
// import AutoComplete from "@react/google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import useStyles from "./styles";
import "./Header.css";
import TextField from '@mui/material/TextField';

export default function Header() {
    return (
        <AppBar position="static" sx={{backgroundColor: '#7e57c2'}}>
            <Toolbar sx={{height: '0px'}}>
                <div className="navBar">
                    <div className="logoParent">
                        <p className="logo">Trip Advisor</p>
                    </div>
                    <div className="searchBar">
                        <p>Explore New Places</p>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" color="warning" />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}
