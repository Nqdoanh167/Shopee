/** @format */

import React, {useEffect, useState} from 'react';
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
import CardComponent from '../../components/CardComponent/CardComponent';
import * as ProductService from '../../services/ProductService';
import Loading from '../../components/LoadingComponent/Loading';
import {useQuery} from 'react-query';
import {useNavigate} from 'react-router-dom';
export default function HomePage() {
   const navigate = useNavigate();
   const getData = async () => {
      const res = await ProductService.getAllProduct();
      return res?.data?.data;
   };
   const getAllCategory = async () => {
      const res = await ProductService.getAllCategory();
      return res?.data?.data;
   };
   const {isLoading, data: products} = useQuery(['products'], getData);
   const {isLoading: isLoadingCategory, data: allCategorys} = useQuery(['allCategorys'], getAllCategory);
   return (
      <Loading className={styles.homeWrap} isLoading={isLoading}>
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
                  <Loading isLoading={isLoadingCategory}>
                     <Row className={styles.list_category}>
                        {allCategorys &&
                           allCategorys.map((item, index) => (
                              <Col span={3} key={index + 1}>
                                 <div className={styles.item} onClick={() => navigate(`/search?filter=${item}`)}>
                                    <img src={shirts} alt='' width={80} />
                                    <span>{item}</span>
                                 </div>
                              </Col>
                           ))}
                     </Row>
                  </Loading>
               </div>
               <div className={styles.flash_sale}>
                  <div className={styles.title}>FLASH SALE</div>
                  <Row className={styles.list_sale} gutter={15}>
                     {products?.map((item, index) => (
                        <Col span={4} className={styles.item_sale} key={index + 1}>
                           <CardComponent product={item} />
                        </Col>
                     ))}
                  </Row>
               </div>
               {/* <div className={styles.suggest_today}>
                  <div className={styles.title}>GỢI Ý HÔM NAY</div>
                  <Row className={styles.list_suggest} gutter={15}>
                     <Col span={4} className={styles.item_suggest}>
                        <CardComponent />
                     </Col>
                     <Col span={4}>
                        <CardComponent />
                     </Col>
                     <Col span={4}>
                        <CardComponent />
                     </Col>
                     <Col span={4}>
                        <CardComponent />
                     </Col>
                     <Col span={4}>
                        <CardComponent />
                     </Col>
                     <Col span={4}>
                        <CardComponent />
                     </Col>
                  </Row>
               </div> */}
            </div>
         </div>
      </Loading>
   );
}
