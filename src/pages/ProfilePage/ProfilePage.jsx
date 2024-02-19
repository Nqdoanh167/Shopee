/** @format */

import React, {useEffect, useState} from 'react';
import styles from './ProfilePage.module.scss';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {IconProfile} from '../../svg';
import * as UserService from '../../services/UserService';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../redux/slides/userSlide';
export default function ProfilePage() {
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const [info, setInfo] = useState({
      name: '',
      phone: '',
      address: '',
      dob: '',
   });
   const [avatar, setAvatar] = useState('');
   const handleOnChange = (e) => {
      setInfo({
         ...info,
         [e.target.name]: e.target.value,
      });
   };
   const handleOnChangeAvatar = (e) => {
      setAvatar(e.target.value);
      console.log('avatar', e.target.value);
   };
   const formData = new FormData();
   useEffect(() => {
      formData.append('name', info?.name);
      formData.append('phone', info?.phone);
      formData.append('address', info?.address);
      formData.append('dob', info?.dob);
      formData.append('avatar', avatar);
   }, [info, avatar]);

   const handleUpdateUser = async () => {
      const res = await UserService.updateUser({
         id: user?.id,
         access_token: user?.access_token,
         data: formData,
      });
      if (res.data) {
         alert(res?.message);
         dispatch(
            updateUser({
               name: info?.name,
               phone: info?.phone,
               address: info?.address,
               dob: info?.dob,
               avatar: avatar,
            }),
         );
      }
   };
   return (
      <div className={styles.profile}>
         <div className={styles.wrap}>
            <div className={styles.container}>
               <div className={styles.header}>
                  <span className={styles.title}>Hồ Sơ Của Tôi</span>
                  <span className={styles.desc}>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
               </div>
               <div className={styles.content}>
                  <div className={styles.left}>
                     <div className={styles.form}>
                        <div className={styles.key}>
                           <span>Email</span>
                           <span>Mật khẩu</span>
                           <span>Tên</span>
                           <span>Số điện thoại</span>
                           <span>Địa chỉ</span>
                           <span>Ngày sinh</span>
                        </div>
                        <div className={styles.value}>
                           <span>{user?.email}</span>
                           <span>Thay đổi mật khẩu</span>
                           <input
                              type='text'
                              className={styles.name}
                              name='name'
                              value={info?.name}
                              onChange={handleOnChange}
                           />
                           <input
                              type='text'
                              className={styles.phone}
                              name='phone'
                              value={info?.phone}
                              onChange={handleOnChange}
                           />
                           <input
                              type='text'
                              className={styles.address}
                              name='address'
                              value={info?.address}
                              onChange={handleOnChange}
                           />
                           <input
                              type='text'
                              className={styles.dob}
                              name='dob'
                              value={info?.dob}
                              onChange={handleOnChange}
                           />
                        </div>
                     </div>
                     <ButtonComponent
                        textButton={'Lưu'}
                        styleTextButton={{
                           color: '#fff',
                        }}
                        styleButton={{
                           width: 'max-content',
                           minWidth: '70px',
                           height: '40px',
                           backgroundColor: '#ee4d2d',
                        }}
                        onClick={handleUpdateUser}
                     />
                  </div>

                  <div className={styles.right}>
                     <div className={styles.user}>
                        <IconProfile style={{width: '50px', stroke: '#c6c6c6'}} />
                     </div>
                     <input type='file' name='avatar' onChange={handleOnChangeAvatar} />
                     <div className={styles.desc}>
                        <span>Dụng lượng file tối đa 1 MB</span>
                        <span>Định dạng:.JPEG, .PNG</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
