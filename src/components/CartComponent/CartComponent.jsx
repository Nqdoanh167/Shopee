/** @format */

import React from 'react';
import styles from './cartComponent.module.scss';
import {Card} from 'antd';
import love from '../../assets/images/love.png';
export default function CartComponent() {
   return (
      <Card
         className={styles.card}
         hoverable
         bodyStyle={{padding: '10px'}}
         cover={
            <img
               alt='example'
               src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
               className={styles.image}
            />
         }
      >
         <img
            src={love}
            alt='logo'
            style={{
               width: '46px',
               height: '18px',
               position: 'absolute',
               top: 3,
               left: -1,
               borderTopLeftRadius: '3px',
            }}
         />
         <div className={styles.discount}>-50%</div>
         <div className={styles.content}>
            <div className={styles.name}>Áo nữ cao cấp vip</div>
            <div className={styles.note}>Đang bán chạy</div>
            <div className={styles.price_selled}>
               <span className={styles.price}>
                  <span style={{color: 'red', fontSize: '10px'}}>đ</span>89000
               </span>
               <span className={styles.selled}>Đã bán 2k</span>
            </div>
         </div>
      </Card>
   );
}
