import React from 'react';
import CountUpText from './CountUpText';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>JUSTIN BUTH</h1>
            <h2>FULLSTACK DEVELOPER</h2>
            <CountUpText></CountUpText>
        </div>
    )
}

export default HeroSection
