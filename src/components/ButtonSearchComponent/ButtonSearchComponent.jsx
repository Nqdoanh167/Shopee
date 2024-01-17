/** @format */

import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
export default function ButtonSearchComponent(style, props) {
   const {textButton} = props;
   return (
      <div
         style={{
            ...style.style,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
         }}
      >
         <SearchOutlined style={{color: '#fff', margin: '0'}} />
         <span style={{fontSize: '14px'}}>{textButton}</span>
      </div>
   );
}
