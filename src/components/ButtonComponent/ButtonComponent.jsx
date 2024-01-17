/** @format */

import {Button} from 'antd';
import React from 'react';
import styles from './ButtonComponent.module.scss';
const ButtonComponent = ({size, styleButton, styleTextButton, textButton, disabled, ...rests}) => {
   return (
      <Button className={styles.btn} disabled={disabled} style={styleButton} size={size} {...rests}>
         <span style={styleTextButton}>{textButton}</span>
      </Button>
   );
};

export default ButtonComponent;
