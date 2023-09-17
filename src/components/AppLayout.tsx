import React from 'react';
import AppBar from "./AppBar";
import Footer from "./Footer";

const AppLayout = ({children} : {children:React.ReactNode}) => {
    return (
        <>
            <AppBar/>
            <main className="main">
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default AppLayout;