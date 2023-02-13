import React from "react";
// import AutoComplete from "@react/google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import useStyles from "./styles";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar >
                <Typography variant="h5" >
                    Trip Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" >
                        Explore new places
                    </Typography>
                </Box>
                {/* <AutoComplete> */}
                    <div >
                        <div >
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                      
                        />
                    </div>
                {/* </AutoComplete> */}
            </Toolbar>
        </AppBar>
    );
}
