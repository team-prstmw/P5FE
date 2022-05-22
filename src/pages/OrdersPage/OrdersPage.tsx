import { useState } from 'react';
import OrderCard from 'src/components/OrderCard/OrderCard';
import OrderDetails from 'src/components/OrderDetails/OrderDetails';

import someName from '../../../orders.json';
import styles from './OrdersPage.module.css';

function OrdersPage() {
  const order = someName.data;

  const [clicked, setClicked] = useState<null | {
    dish: {
      name: string;
      quantity: number;
      state: boolean;
    }[];
    note: string;
    done: boolean;
  }>(null);

  const handleClickAway = () => {
    setClicked(null);
  };

  return (
    <div className={styles.orderPage}>
      <div className={styles.pageTitle}>Orders Page</div>
      <div className={styles.pageOrder}>
        {order.map(({ dish, note, done }, id) => {
          return (
            <OrderCard key={id.toString()} table={id} openModal={setClicked} dish={dish} note={note} done={done} />
          );
        })}
        {clicked && <OrderDetails handleClickAway={handleClickAway} dish={clicked.dish} note={clicked.note} />}
      </div>
    </div>
  );
}

export default OrdersPage;
