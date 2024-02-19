/** @format */

import React, {useState} from 'react';
import styles from './LoginPage.module.scss';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ButtonIconComponent from '../../components/ButtonIconComponent/ButtonIconComponent';
import face from '../../assets/images/face.png';
import google from '../../assets/images/google.png';
import {EyeFilled, EyeInvisibleFilled, Logo} from '../../svg';
import * as UserService from '../../services/UserService';
import {useLocation, useNavigate} from 'react-router-dom';
import Loading from '../../components/LoadingComponent/Loading';
import {jwtDecode} from 'jwt-decode';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../redux/slides/userSlide';
export default function LoginPage() {
   const [isShowPassword, setIsShowPassword] = useState(false);
   const [load, setLoad] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();
   const [user, setUser] = useState({
      email: '',
      password: '',
   });
   const handleOnChange = (e) => {
      const {name, value} = e.target;
      setUser((prevUser) => ({
         ...prevUser,
         [name]: value,
      }));
   };
   const handleGetDetailsUser = async (id, access_token) => {
      const res = await UserService.getDetailUser({id, access_token});
      dispatch(updateUser({...res?.data, access_token: access_token}));
   };
   const handleLogin = async () => {
      try {
         setLoad(true);
         const data = await UserService.loginUser(user);
         if (data?.access_token) {
            if (location?.state) {
               navigate(location?.state);
            } else {
               navigate('/');
            }
            localStorage.setItem('access_token', JSON.stringify(data?.access_token));
            const decoded = jwtDecode(data?.access_token);
            if (decoded?.id) {
               handleGetDetailsUser(decoded?.id, data?.access_token);
            }
         }
      } catch (error) {
         alert(error?.response?.data);
      } finally {
         setLoad(false);
      }
   };
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
                        <InputForm
                           placeholder={'Nhập email'}
                           onChange={handleOnChange}
                           name='email'
                           value={user?.email}
                        />
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
                        <InputForm
                           placeholder={'Mật khẩu'}
                           type={isShowPassword ? 'text' : 'password'}
                           onChange={handleOnChange}
                           name='password'
                           value={user?.password}
                        />
                     </div>
                     <Loading isLoading={load}>
                        <ButtonComponent
                           textButton={'ĐĂNG NHẬP'}
                           styleTextButton={{
                              color: '#fff',
                           }}
                           styleButton={{
                              width: '100%',
                              height: '40px',
                              backgroundColor: '#ee4d2d',
                           }}
                           disabled={!user?.email || !user?.password}
                           onClick={handleLogin}
                        />
                     </Loading>
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
                        Bạn mới biết đến Shopee?{' '}
                        <span style={{color: 'red', cursor: 'pointer'}} onClick={() => navigate('/register')}>
                           Đăng ký
                        </span>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
