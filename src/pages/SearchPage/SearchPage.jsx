/** @format */

import React, {useEffect} from 'react';
import styles from './SearchPage.module.scss';
import {Col, Row} from 'antd';
import {useQuery} from 'react-query';
import * as ProductService from '../../services/ProductService';
import CardComponent from '../../components/CardComponent/CardComponent';
import Loading from '../../components/LoadingComponent/Loading';
import {useLocation} from 'react-router-dom';
export default function SearchPage() {
   const location = useLocation();
   const filter = location.search;
   const getData = async () => {
      const res = await ProductService.getAllProduct(filter);
      return res?.data?.data;
   };
   const {isLoading, data: products} = useQuery(['products', filter], getData);
   return (
      <div className={styles.wrap}>
         <div className={styles.container}>
            <div className={styles.filter}>
               <span className={styles.title}>Bộ lọc tìm kiếm</span>
            </div>
            <div className={styles.content}>
               <Loading isLoading={isLoading}>
                  <Row className={styles.list_product} gutter={15}>
                     {products?.map((item, index) => (
                        <Col span={4.8} className={styles.item_sale} key={index + 1}>
                           <CardComponent product={item} />
                        </Col>
                     ))}
                  </Row>
               </Loading>
            </div>
         </div>
      </div>
   );
}
