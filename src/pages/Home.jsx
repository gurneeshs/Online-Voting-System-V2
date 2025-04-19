import React from 'react'
import BackgroundSlider from '../components/Home/BackgroundSlider'
import About from '../components/Home/About'
import Features from '../components/Home/Features'
import Team from '../components/Home/Team'
import FAQ from '../components/Home/FAQ'
import UpcomingFeatures from '../components/Home/Upcoming'
import Contact from '../components/Home/Contact'
import Navbar from '../components/Navbar/Navbar'
import ElectionsOverview from '../components/Home/ElectionOverview'
import Footer from '../components/Home/Footer'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-lightColor1 overflow-hidden">
            <div className="w-full mx-auto bg-lightColor1 rounded-sm">
                <Navbar />
                <BackgroundSlider/>
                <About/>
                <ElectionsOverview/>
                <Features/>
                <Team/>
                <FAQ/>
                <UpcomingFeatures />
                <Contact />
                <Footer/>
            </div>
        </div>
    )
}

export default Home
