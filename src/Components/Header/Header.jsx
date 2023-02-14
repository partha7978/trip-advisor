import React from "react";
// import AutoComplete from "@react/google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import useStyles from "./styles";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <div className="navBar">
                    <div className="logo">

                    </div>
                    <div className="searchBar">
                        <Typography variant="h5">Explore New Places</Typography>
                        <input type="text" className="searchBox" placeholder="search here ... " />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}
