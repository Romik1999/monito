import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {navMenu} from "../../common/moks/navigate";
import {IconButton, List, ListItem, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import MyButton from "../UI/MyButton";
import MySelect from "../UI/MySelect";
import {currency} from "../../common/moks/currency";
import MyInput from "../UI/MyInput";
import Logo from "../Logo";

function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate()

    const renderNavMenu = navMenu.map((element): JSX.Element => {
        return (
            <ListItem key={element.id} onClick={() => navigate(`${element.path}`)}>
                {element.name}
            </ListItem>
        )
    })

    const renderCurrentItems = currency.map((element): JSX.Element => {
        return (
            <MenuItem
                key={element.id}
                value={element.value}
            >
                {element.icon}
                {element.name}
            </MenuItem>
        )
    })

    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: "10px",
                        justifyContent: 'space-between'
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                   <Logo/>
                    <List
                        sx={{display: 'flex'}}
                    >
                        {renderNavMenu}
                    </List>
                    <div className="search">
                        <MyInput/>
                    </div>
                    <MyButton>Join the community</MyButton>
                    <MySelect
                        className="currency"
                        sx={{
                            maxWidth: '88px',
                            border: 'none',
                        }}
                    >
                        {renderCurrentItems}
                    </MySelect>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;