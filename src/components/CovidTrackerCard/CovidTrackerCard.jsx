import React from 'react';
import styles from './CovidTrackerCard.module.css';
import iphone from '../../assets/iphone.PNG';

function CovidTrackerCard() {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                
                <div className={styles.title_container}>
                    <h1 className={styles.title}>MONEYLOG</h1>
                </div>

                <div className={styles.detail_container}>
                    <div className={styles.image_container}>
                        <img 
                            src={iphone}
                            className={styles.iphone_image}
                        />
                    </div>
                    <div className={styles.text_container}>
                        
                        <p className={styles.description}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className={styles.icon_section}>
                            {/* <i className={`${styles.tech_icon} fab fa-instagram` }></i> */}
                            <i className={styles.node_icon}></i>
                            <i className={styles.react_native_icon}></i>
                            <i className={styles.google_icon}></i>
                            <i className={styles.drive_icon}></i>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default CovidTrackerCard
