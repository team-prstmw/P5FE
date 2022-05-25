import { useState } from 'react';
import { OrderCard } from 'src/components/OrderCard/OrderCard';
import { OrderDetails } from 'src/components/OrderDetails/OrderDetails';

import { useGetOrder } from '../../api/useGetOrder';
import styles from './OrdersPage.module.css';

export function OrdersPage() {
  const order = useGetOrder();

  const [clicked, setClicked] = useState<null | {
    dish: {
      name: string;
      quantity: number;
      status: boolean;
    }[];
    note: string;
    done: boolean;
  }>(null);

  const handleClickAway = () => {
    setClicked(null);
  };

  return (
    <div>
      <div className={styles.title}>Orders Page</div>
      <div className={styles.order}>
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
