import React from 'react';
import '../App.css';
import HeroSection from './HeroSection';
import MoneyLogCard from './MoneyLogCard/MoneyLogCard';
import CovidTrackerCard from './CovidTrackerCard/CovidTrackerCard';
// import Cards from '../Cards'
// import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <MoneyLogCard></MoneyLogCard>
            <CovidTrackerCard></CovidTrackerCard>
            {/* <Footer />  */}
        </>
    )
}

export default Home;
