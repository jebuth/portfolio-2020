import React from 'react';
import './CovidTrackerCard.css';

function CovidTrackerCard() {
    return (
        <div className='card'>
            <div className="card_container">
                <div className="left">
                    <div className="img_container">
                        <img src='assets/iphone.PNG'
                        className='iphone_img'
                        alt='iphone image' />    
                    </div>
                </div>
                <div className="right">
                    <div className="text_container">
                        <h1 className='title'>moneylog</h1>
                        <p className='description'> lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock. 
                        lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock
                        lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock
                        lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock</p>
                    </div>
                    
                    <div className="icon-section">
                        <i className="fab fa-instagram tech_icon"></i>
                        <i className="fab fa-instagram tech_icon"></i>
                        <i className="fab fa-instagram tech_icon"></i>
                        <i className="fab fa-instagram tech_icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidTrackerCard
