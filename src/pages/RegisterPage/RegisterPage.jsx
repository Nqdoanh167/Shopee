/** @format */

import React, {useState} from 'react';
import styles from './RegisterPage.module.scss';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ButtonIconComponent from '../../components/ButtonIconComponent/ButtonIconComponent';
import face from '../../assets/images/face.png';
import google from '../../assets/images/google.png';
import {EyeFilled, EyeInvisibleFilled, Logo} from '../../svg';
import * as UserService from '../../services/UserService';
import Loading from '../../components/LoadingComponent/Loading';
import {useNavigate} from 'react-router-dom';
export default function RegisterPage() {
   const [isShowPassword, setIsShowPassword] = useState(false);
   const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
   const [load, setLoad] = useState(false);
   const navigate = useNavigate();
   const [user, setUser] = useState({
      email: '',
      password: '',
      confirmPassword: '',
   });
   const handleOnChange = (e) => {
      const {name, value} = e.target;
      setUser((prevUser) => ({
         ...prevUser,
         [name]: value,
      }));
   };

   const handleRegister = async () => {
      if (user?.password !== user?.confirmPassword) alert('Nhập lại mật khẩu không đúng');
      else {
         try {
            setLoad(true);
            const response = await UserService.registerUser({
               email: user?.email,
               password: user?.password,
            });
            if (response) {
               alert('Bạn vui lòng xác thực tài khoản qua email!');
               navigate('/login');
            }
         } catch (error) {
            alert(error?.response?.data);
         } finally {
            setLoad(false);
         }
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
               <span className={styles.title}>Đăng ký</span>
            </div>
            <div className={styles.nav_right}>Bạn cần giúp đỡ?</div>
         </div>
         <div className={styles.content_wrap}>
            <div className={styles.content}>
               <div className={styles.form}>
                  <div className={styles.title}>Đăng ký</div>
                  <div className={styles.input_btn}>
                     <div className={styles.input_form}>
                        <InputForm
                           placeholder={'Email/Số điện thoại'}
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
                     <div className={styles.input_form}>
                        <span>
                           {isShowConfirmPassword ? (
                              <EyeFilled
                                 onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
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
                                 onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
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
                           placeholder={'Nhập lại mật khẩu'}
                           type={isShowConfirmPassword ? 'text' : 'password'}
                           onChange={handleOnChange}
                           name='confirmPassword'
                           value={user?.confirmPassword}
                        />
                     </div>
                     <Loading isLoading={load}>
                        <ButtonComponent
                           textButton={'ĐĂNG KÝ'}
                           styleTextButton={{
                              color: '#fff',
                           }}
                           styleButton={{
                              width: '100%',
                              height: '40px',
                              backgroundColor: '#ee4d2d',
                           }}
                           disabled={!user?.email || !user?.password || !user?.confirmPassword}
                           onClick={handleRegister}
                        />
                     </Loading>
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
                        Bạn đã có tài khoản? <span style={{color: 'red', cursor: 'pointer'}}>Đăng nhập</span>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
