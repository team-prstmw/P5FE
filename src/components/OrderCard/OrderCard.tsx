import { Dispatch, SetStateAction } from 'react';

import styles from './OrderCard.module.css';

type OrderCardProps = {
  table: number;
  openModal: Dispatch<
    SetStateAction<{
      dish: {
        name: string;
        quantity: number;
        status: boolean;
      }[];
      note: string;
      done: boolean;
    } | null>
  >;
  dish: {
    name: string;
    quantity: number;
    status: boolean;
  }[];
  note: string;
  done: boolean;
};

export function OrderCard({ table, openModal, dish, note, done }: OrderCardProps) {
  const handleClick = () => openModal({ dish, note, done });

  return (
    <>
      {!done && (
        <div className={styles.card} onClick={handleClick}>
          <div className={styles.header}>Stolik numer: {table}</div>
          <div className={styles.table}>Zamówienie</div>
          <div className={styles.order}>
            {dish.map(({ name, quantity, status }) => {
              return (
                <div style={{ color: `${status ? '#4CBB17' : '#000'}` }}>
                  {name} x {quantity}
                </div>
              );
            })}
          </div>
          <div className={styles.order__information}>
            <div className={styles.order__note}>{note}</div>
            <div className={styles.order__details}>Więcej szczegółów</div>
          </div>
        </div>
      )}
    </>
  );
}
