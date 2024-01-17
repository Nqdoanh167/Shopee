/** @format */

import React, {useState} from 'react';
import styles from './LoginPage.module.scss';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ButtonIconComponent from '../../components/ButtonIconComponent/ButtonIconComponent';
import face from '../../assets/images/face.png';
import google from '../../assets/images/google.png';
import {EyeFilled, EyeInvisibleFilled, Logo} from '../../svg';

export default function LoginPage() {
   const [isShowPassword, setIsShowPassword] = useState(false);
   const error = false;
   return (
      <div className={styles.container}>
         <div className={styles.nav}>
            <div className={styles.nav_left}>
               <Logo
                  style={{
                     fill: '#ee4d2d',
                     height: '42px',
                     top: '-6px',
                     position: 'relative',
                     cursor: 'pointer',
                  }}
               />
               <span className={styles.title}>Đăng nhập</span>
            </div>
            <div className={styles.nav_right}>Bạn cần giúp đỡ?</div>
         </div>
         <div className={styles.content_wrap}>
            <div className={styles.content}>
               <div className={styles.form}>
                  <div className={styles.title}>Đăng nhập</div>
                  <div className={styles.input_btn}>
                     <div className={styles.input_form}>
                        <InputForm placeholder={'Email/Số điện thoại/Tên đăng nhập'} />
                        <span style={{color: error ? '#ee4d2d' : '#fff', fontSize: '13px'}}>
                           Vui lòng điền vào mục này
                        </span>
                     </div>
                     <div className={styles.input_form}>
                        <span>
                           {isShowPassword ? (
                              <EyeFilled
                                 onClick={() => setIsShowPassword(!isShowPassword)}
                                 style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: '12px',
                                    right: '8px',
                                    width: '20px',
                                 }}
                              />
                           ) : (
                              <EyeInvisibleFilled
                                 onClick={() => setIsShowPassword(!isShowPassword)}
                                 style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: '12px',
                                    right: '8px',
                                    width: '20px',
                                 }}
                              />
                           )}
                        </span>
                        <InputForm placeholder={'Mật khẩu'} type={isShowPassword ? 'text' : 'password'} />
                        <span style={{color: error ? '#ee4d2d' : '#fff', fontSize: '13px'}}>
                           Vui lòng điền vào mục này
                        </span>
                     </div>
                     <ButtonComponent
                        textButton={'ĐĂNG NHẬP'}
                        styleTextButton={{
                           color: '#fff',
                        }}
                        styleButton={{
                           height: '40px',
                           backgroundColor: '#ee4d2d',
                        }}
                        disabled
                     />
                  </div>
                  <div className={styles.fg_lg}>
                     <div className={styles.forget}>Quên mật khẩu</div>
                     <div className={styles.login_with_sms}>Đăng nhập với SMS</div>
                  </div>
                  <div className={styles.or}>
                     <div className={styles.brick}></div>
                     <span>HOẶC</span>
                     <div className={styles.brick}></div>
                  </div>
                  <div className={styles.btn}>
                     <ButtonIconComponent
                        icon={<img src={face} alt='face' width={22} />}
                        textButton={'Facebook'}
                        style={{
                           padding: '10px',
                           border: '1px solid #00000042',
                           width: '145px',
                        }}
                     />
                     <ButtonIconComponent
                        icon={<img src={google} alt='google' width={22} />}
                        textButton={'Google'}
                        style={{
                           padding: '10px',
                           width: '145px',
                           border: '1px solid #00000042',
                        }}
                     />
                  </div>

                  <div className={styles.footer}>
                     <span>
                        Bạn mới biết đến Shopee? <span style={{color: 'red', cursor: 'pointer'}}>Đăng ký</span>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
