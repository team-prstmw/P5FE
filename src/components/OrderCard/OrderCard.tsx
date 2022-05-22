/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, SetStateAction } from 'react';

import styles from './OrderCard.module.css';

type OrderCardProps = {
  table: number;
  openModal: Dispatch<
    SetStateAction<{
      dish: {
        name: string;
        quantity: number;
        state: boolean;
      }[];
      note: string;
      done: boolean;
    } | null>
  >;
  dish: {
    name: string;
    quantity: number;
    state: boolean;
  }[];
  note: string;
  done: boolean;
};

function OrderCard({ table, openModal, dish, note, done }: OrderCardProps) {
  const handleClick = () => openModal({ dish, note, done });

  return (
    <>
      {!done && (
        <div className={styles.orderCard} onClick={handleClick}>
          <div className={styles.orderHeader}>Stolik numer: {table}</div>
          <div className={styles.orderTable}>Zamówienie</div>
          <div className={styles.order}>
            {dish?.map(({ name, quantity, state }) => {
              return (
                <>
                  {state ? (
                    <div style={{ color: '#4CBB17' }}>
                      {name} x {quantity}
                    </div>
                  ) : (
                    <div style={{ color: '#000' }}>
                      {name} x {quantity}
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div className={styles.orderInfo}>
            <div className={styles.orderNote}>{note}</div>
            <div className={styles.orderDetails}>Wiecej szcegółów</div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderCard;
