/** @format */

import React from 'react';
import styles from './cardComponent.module.scss';
import {Card} from 'antd';
import love from '../../assets/images/love.png';
import {useNavigate} from 'react-router-dom';
import {convertPrice} from '../../utils';
export default function CardComponent({product}) {
   const navigate = useNavigate();
   const handleViewDetail = () => {
      navigate(`/product-detail/${product?._id}`);
   };
   return (
      <Card
         className={styles.card}
         hoverable
         bodyStyle={{padding: '10px'}}
         cover={<img alt='example' src={`http://localhost:8080/${product?.image}`} className={styles.image} />}
         onClick={handleViewDetail}
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
         <div className={styles.discount}>{`-${product?.discount}%`}</div>
         <div className={styles.content}>
            <div className={styles.name}>{product?.name}</div>
            <div className={styles.note}>{product?.description}</div>
            <div className={styles.price_selled}>
               <span className={styles.price}>{convertPrice(product?.price)}</span>
               <span className={styles.selled}>Đã bán {product?.selled ? product?.selled : 0}</span>
            </div>
         </div>
      </Card>
   );
}
