/** @format */

import React from 'react';
import styles from './HomePage.module.scss';
import slide1 from '../../assets/images/slide_1.jpg';
import slide2 from '../../assets/images/slide_2.jpg';
import slide3 from '../../assets/images/slide_3.jpg';
import img_1 from '../../assets/images/img_1.jpg';
import img_2 from '../../assets/images/img_2.jpg';
import flash_sale from '../../assets/images/flash_sale.png';
import shirts from '../../assets/images/shirts.png';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import {Col, Row} from 'antd';
import CartComponent from '../../components/CartComponent/CartComponent';

export default function HomePage() {
   const item_category = [
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },

      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
      {
         img: shirts,
         text: 'Thời trang nam',
      },
   ];

   return (
      <div className={styles.homeWrap}>
         <div className={styles.bannerWrap}>
            <div className={styles.carousel_image}>
               <div className={styles.carousel}>
                  <SliderComponent arrImages={[slide1, slide2, slide3]} />
               </div>
               <div className={styles.image}>
                  <img src={img_1} alt='' width={395} />
                  <img src={img_2} alt='' width={395} />
               </div>
            </div>
            <div className={styles.list_func}>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
               <div className={styles.item}>
                  <img src={flash_sale} alt='flash_sale' width={45} />
                  <span>Khung giờ săn Sale</span>
               </div>
            </div>
         </div>
         <div className={styles.container_wrap}>
            <div className={styles.container}>
               <div className={styles.category}>
                  <div className={styles.title}>DANH MỤC</div>
                  <Row className={styles.list_category}>
                     {item_category.map((item, index) => {
                        return (
                           <Col span={3} key={index + 1}>
                              <div className={styles.item}>
                                 <img src={item.img} alt='' width={83} />
                                 <span>{item.text}</span>
                              </div>
                           </Col>
                        );
                     })}
                  </Row>
               </div>
               <div className={styles.flash_sale}>
                  <div className={styles.title}>FLASH SALE</div>
                  <Row className={styles.list_sale} gutter={15}>
                     <Col span={4} className={styles.item_sale}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                  </Row>
               </div>
               <div className={styles.suggest_today}>
                  <div className={styles.title}>GỢI Ý HÔM NAY</div>
                  <Row className={styles.list_suggest} gutter={15}>
                     <Col span={4} className={styles.item_suggest}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                     <Col span={4}>
                        <CartComponent />
                     </Col>
                  </Row>
               </div>
            </div>
         </div>
      </div>
   );
}
