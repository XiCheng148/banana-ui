/**
 * title: 自定义粗细
 */

import React from 'react';
import { Divider } from '@banana/banana-react';

export default function customWidth() {
  return (
    <div>
      <p>
        你可以使用<code>width</code>参数自定义分割线的粗细：
      </p>
      <Divider width={5} />
      <Divider width="5px" />
      <Divider width="0.5rem" />
      <br />
      <p>也可以通过css变量的方式自定义分割线的粗细：</p>
      <Divider style={{ '--banana-divider-width': '5px' } as React.CSSProperties} />
    </div>
  );
}
