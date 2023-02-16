import React from "react";
// import AutoComplete from "@react/google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import useStyles from "./styles";
import "./Header.css";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <div className="navBar">
                    <div className="logoParent">
                        <p className="logo">Trip Advisor</p>
                    </div>
                    <div className="searchBar">
                        <p>Explore New Places</p>
                        <input type="text" className="searchBox" placeholder="search here ... " />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}
