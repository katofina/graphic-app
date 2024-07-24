import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';

const Layout = () => {
    return (
        <div className='wrapper'>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export {Layout};