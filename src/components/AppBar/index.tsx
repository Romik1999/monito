import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {navMenu} from "../../common/moks/navigate";
import {IconButton, List, ListItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/images/common/logo.svg"

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

    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{
                            display: {xs: 'block', md: 'block'},
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img onClick={()=>{navigate('/')}} src={logo} alt="logo"/>
                    <List>
                        {renderNavMenu}
                    </List>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;