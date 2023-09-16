import React from 'react';
import {List, ListItem} from "@mui/material";
import {navMenu} from "../../common/moks/navigate";
import {useNavigate} from "react-router-dom";

const MainMenu = () => {
    const navigate = useNavigate()

    const renderNavMenu = navMenu.map((element): JSX.Element => {
        return (
            <ListItem key={element.id} onClick={() => navigate(`${element.path}`)}>
                {element.name}
            </ListItem>
        )
    })
    return (
        <List
            className="menu"
            sx={{display: 'flex'}}
        >
            {renderNavMenu}
        </List>
    );
};

export default MainMenu;