/** @format */

import React from 'react';
import styles from './HomePage.module.scss';
export default function HomePage() {
   return (
      <div className={styles.homeWrap}>
         <div className={styles.bannerWrap}>
            <div className={styles.carousel}></div>
            <div className={styles.image}>
               <img src='./assets/images/img_1.jpg' alt='' />
               <img src='./assets/images/img_2.jpg' alt='' />
            </div>
         </div>
      </div>
   );
}
