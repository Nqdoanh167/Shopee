/** @format */

import React from 'react';
import styles from './ButtonIconComponent.module.scss';
export default function ButtonIconComponent({style, textButton, icon, styleTextButton, onClick, disabled}) {
   return (
      <div
         className={styles.btn_icon}
         style={{...style, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? '0.7' : '1'}}
         onClick={onClick}
      >
         {icon}
         <span style={styleTextButton}>{textButton}</span>
      </div>
   );
}
