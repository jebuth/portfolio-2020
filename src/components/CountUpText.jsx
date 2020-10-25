import React from 'react'
import CountUp from 'react-countup';
import '../components/CountUpText.css';

function CountUpText() {
    return (
        <div className='container'>
            <CountUp 
                className='count_value'
                end={254040}
                duration={3.5}
                separator={','}
                />
            <h2 className='count_text'>&nbsp;HOURS LEARNING</h2>
        </div>
    )
}

export default CountUpText
