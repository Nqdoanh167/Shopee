/** @format */

import React from 'react';
import {Input} from 'antd';
import styles from './InputForm.module.scss';
const InputForm = (props) => {
   const {placeholder = 'Nhập text', onChange, ...rests} = props;
   return (
      <Input placeholder={placeholder} value={props.value} {...rests} className={styles.input} onChange={onChange} />
   );
};

export default InputForm;
