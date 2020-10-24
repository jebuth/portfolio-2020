import React from 'react'
import CountUp from 'react-countup';
import '../components/CountUpText.css';

function CountUpText() {
    return (
        <div className='container'>
            <CountUp 
                className='count_value'
                end={100}
                duration={3.5}
                />
            <h2 className='count_text'>HOURS CODING</h2>
        </div>
    )
}

export default CountUpText
