import React from "react";
// import AutoComplete from "@react/google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" >
                    Trip Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" >
                        Explore new places
                    </Typography>
                </Box>
                {/* <AutoComplete> */}
                    <div>
                        <div>
                            {/* <SearchIcon /> */}SR icon
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
