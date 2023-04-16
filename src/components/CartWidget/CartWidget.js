import React from 'react';
import styles from './CartWidget.module.css';

function CartWidget() {
  return (
    <div className={styles['cart-widget']}>
      <div className={styles['cart-icon']}>
        <box-icon type='solid' name='cart'></box-icon>
      </div>
      <div className={styles['cart-count']}>
        
      </div>
    </div>
  );
}

export default CartWidget;
