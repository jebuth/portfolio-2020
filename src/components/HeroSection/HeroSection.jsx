import React from 'react';
import CountUpText from '../CountUpText';
import Typist from 'react-typist';
import '../../App.css';
import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <div className={styles.hero_container}>
            <Typist 
                className={styles.hero_text}
                avgTypingDelay={60}
                >
                <span className={styles.display_name}> JUSTIN <span className={styles.display_last_name}>BUTH</span> </span>
                <Typist.Delay ms={100} />

                {/* <span className={styles.display_position}> STUDENT </span>
                <Typist.Backspace count={8} delay={200} />
                <span className={styles.display_position}> INVESTOR </span>
                <Typist.Backspace count={9} delay={200} /> */}
                <span className={styles.display_position}> FULLSTACK DEVELOPER </span>

            </Typist>
            
            <CountUpText></CountUpText>
        </div>
    )
}

export default HeroSection




