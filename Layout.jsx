import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer/Footer';

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