import React from 'react';
import NavBar from './navigation/navbar/navbar';
import Home from './pages/home/home';

class WebApp extends React.Component{
    render() {
        return (
            <>
                <NavBar/>
                <Home/>
            </>
            
        );
    }
}


export default WebApp;