import React from 'react';
import styles from './MoneyLogCard.module.css';

function MoneyLogCard() {
    return (
        <div className={styles.card}>
            <div className={styles.card_container}>
                <div className={styles.left}>
                    <div className={styles.img_container}>
                        <img src='assets/iphone.PNG'
                        className={styles.iphone_img}
                        alt='iphone image' />    
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.text_container}>
                        <h1 className={styles.title}>moneylog</h1>
                        <p className={styles.description}> lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock. 
                        lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock
                        lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock
                        lamborginhinfucka  cop car. pisolt on my hip likei'm a cop yeah eah. this aint no guitar bitch this a glock</p>
                    </div>
                    
                    <div className={styles.icon_section}>
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

export default MoneyLogCard
