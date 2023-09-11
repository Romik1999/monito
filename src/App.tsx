import React from 'react';
import {ThemeProvider} from "@mui/material/styles";
import THEME from "./theme";
import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Catalog from './pages/catalog';

function App() {
    return (
        <ThemeProvider theme={THEME}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
