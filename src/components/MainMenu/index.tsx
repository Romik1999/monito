import React from 'react';
import {List, ListItem} from "@mui/material";
import {navMenu} from "../../common/moks/navigate";
import {useNavigate} from "react-router-dom";
import {useStyles} from "./styles";

const MainMenu = () => {
    const navigate = useNavigate()

    const renderNavMenu = navMenu.map((element): JSX.Element => {
        return (
            <ListItem key={element.id} onClick={() => navigate(`${element.path}`)}>
                {element.name}
            </ListItem>
        )
    })

    const classes = useStyles()

    return (
        <List
            className={classes.menu}
        >
            {renderNavMenu}
        </List>
    );
};

export default MainMenu;