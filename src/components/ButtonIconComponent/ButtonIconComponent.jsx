/** @format */

import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
export default function ButtonIconComponent({style, textButton, icon}) {
   return (
      <div
         style={{
            ...style,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
         }}
      >
         {icon}
         <span style={{fontSize: '14px'}}>{textButton}</span>
      </div>
   );
}
