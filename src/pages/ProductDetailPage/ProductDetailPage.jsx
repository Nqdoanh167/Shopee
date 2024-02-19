/** @format */

import React, {useEffect, useState} from 'react';
import styles from './ProductDetailPage.module.scss';
import {Col, Rate, Row} from 'antd';
import ButtonIconComponent from '../../components/ButtonIconComponent/ButtonIconComponent';
import cart from '../../assets/images/cart.svg';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import * as ProductService from '../../services/ProductService';
import {useQuery} from 'react-query';
import Loading from '../../components/LoadingComponent/Loading';
import {useSelector, useDispatch} from 'react-redux';
import {addCart} from '../../redux/slides/cartSlide';
import {convertPrice} from '../../utils';
import {addOrder} from '../../redux/slides/orderSilde';
export default function ProductDetailPage() {
   const {id} = useParams();
   const [count, setCount] = useState(1);
   const user = useSelector((state) => state.user);
   const handleChangeCount = (type) => {
      if (type === 'increase') {
         setCount(Number(count) + 1);
      } else setCount(Number(count) - 1);
   };
   const handleOnChangeCountInput = (e) => {
      setCount(e.target.value);
   };
   const fetchApiProductDetail = async () => {
      const res = await ProductService.getDetailProduct(id);
      return res?.data?.data;
   };
   const {isLoading, data: productDetail} = useQuery(['product-detail'], fetchApiProductDetail, {
      enabled: !!id,
   });
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const ItemAdd = {
      name: productDetail?.name,
      amount: count,
      image: productDetail?.image,
      price: productDetail?.price,
      product_id: productDetail?._id,
      countInstock: productDetail?.countInStock,
   };
   const handleAddCart = () => {
      if (!user.id) {
         navigate('/login', {state: location?.pathname});
      } else {
         dispatch(addCart({ItemAdd}));
      }
   };
   const handleBuyProduct = () => {
      dispatch(addOrder({orderAdds: [ItemAdd]}));
      navigate('/checkout');
   };
   return (
      <Loading isLoading={isLoading}>
         <div className={styles.wrap}>
            <div className={styles.container}>
               <div className={styles.navbar}>
                  <span>Shopee</span>
                  <span>{'>'}</span>
                  <span>{productDetail?.name}</span>
               </div>
               <div className={styles.content}>
                  <Row gutter={20}>
                     <Col span={10} className={styles.leftCol}>
                        <img
                           src={`http://localhost:8080/${productDetail?.image}`}
                           alt='img product'
                           className={styles.img_primary}
                        />
                        <div className={styles.img_small}></div>
                     </Col>
                     <Col span={14} className={styles.rightCol}>
                        <span className={styles.title}>{productDetail?.name}</span>
                        <div className={styles.feedback}>
                           <div className={styles.star}>
                              <span className={styles.quanity_star}>5.0</span>
                              <Rate disabled defaultValue={5} style={{fontSize: '14px', color: '#ee4d2d'}} />
                           </div>
                           <span style={{color: '#00000024'}}>|</span>
                           <div className={styles.evaluate}>6 Đánh giá</div>
                           <span style={{color: '#00000024'}}>|</span>
                           <div className={styles.selled}>{`${productDetail?.selled || 0} Đã bán`}</div>
                        </div>
                        <div className={styles.price}>{convertPrice(productDetail?.price)}</div>
                        <div className={styles.transport}>
                           <span>Vận chuyển tới</span>
                           <span>{user?.address}</span>
                        </div>
                        <div className={styles.quanity_stock}>
                           <span>Số lượng</span>
                           <div className={styles.quanity}>
                              <button
                                 className={styles.btn_decrease}
                                 onClick={() => handleChangeCount('decrease')}
                                 disabled={count === 1}
                              >
                                 -
                              </button>
                              <input type='text' value={count} onChange={handleOnChangeCountInput} />
                              <button
                                 className={styles.btn_increase}
                                 onClick={() => handleChangeCount('increase')}
                                 disabled={count >= productDetail?.countInStock}
                              >
                                 +
                              </button>
                           </div>
                           <div className={styles.stock}>{`${productDetail?.countInStock} sản phẩm có sẵn`}</div>
                        </div>

                        <div className={styles.btn_wrap}>
                           <ButtonIconComponent
                              icon={<img src={cart} alt='cart' width={20} />}
                              textButton={'Thêm vào giỏ hàng'}
                              style={{
                                 padding: '10px',
                                 width: '200px',
                                 border: '1px solid #ee4d2d',
                                 backgroundColor: '#ff57221a',
                              }}
                              styleTextButton={{
                                 color: '#ee4d2d',
                              }}
                              onClick={handleAddCart}
                              disabled={productDetail?.countInStock === 0}
                           />
                           <ButtonComponent
                              textButton={'Mua ngay'}
                              styleTextButton={{
                                 color: '#fff',
                              }}
                              styleButton={{
                                 width: '180px',
                                 height: '42px',
                                 backgroundColor: '#ee4d2d',
                              }}
                              onClick={handleBuyProduct}
                              disabled={productDetail?.countInStock === 0}
                           />
                        </div>
                     </Col>
                  </Row>
               </div>
            </div>
         </div>
      </Loading>
   );
}
