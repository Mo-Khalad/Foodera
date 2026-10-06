import './App.css';
import MainNavbar from './Components/MainNavbar/MainNavbar';
import Home from './Components/Home/Home';
import Stats from './Components/Stats/Stats';
import Data from './Components/Data'
import About from './Components/About/About';
import AboutTwo from './Components/AboutTwo/AboutTwo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import EntertainmentArticle from './Components/EntertainmentArticle/EntertainmentArticle';
import ExploreFoods from './Components/ExploreFoods/ExploreFoods';
import FrequentlyAsked from './Components/FrequentlyAsked/FrequentlyAsked';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer'
import OurNewsletter from './Components/OurNewsletter/OurNewsletter';
import { useState } from 'react';
import SubNavbar from './Components/SubNavbar/SubNavbar';


function App(){
    const [displayNav , getDisplayNav]= useState(true) 
    window.addEventListener('resize' , ()=> window.innerWidth<=768 ? getDisplayNav(false) :getDisplayNav(true))
    return(
        <>
            {displayNav?<MainNavbar/>:<SubNavbar/>}
            <Home/>
            <Stats/>
            <Data/>  
            <About/>
            <AboutTwo/>
            <EntertainmentArticle/>
            <ExploreFoods/>
            <Testimonials/>
            <FrequentlyAsked/>
            <OurNewsletter/>
            <Footer/>
        </>
    )
}

export default App;
