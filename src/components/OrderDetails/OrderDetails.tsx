import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import styles from './OrderDetails.module.css';

type OrederDetailsProps = {
  handleClickAway: () => void;
  dish: {
    name: string;
    quantity: number;
    status: boolean;
  }[];
  note: string;
};

export function OrderDetails({ handleClickAway, dish, note }: OrederDetailsProps) {
  const close = () => {
    handleClickAway();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.details}>
        <CloseIcon className={styles.icon} onClick={handleClickAway} />
        <div className={styles.title}>Szczegoly zamowienia</div>
        <div className={styles.dishes}>
          {dish.map(({ name, quantity, status }) => {
            return (
              <div className={styles.dish}>
                <span style={{ color: `${status ? '#4CBB17' : '#000'}` }}>
                  {name} x {quantity}
                </span>
                <CheckIcon />
              </div>
            );
          })}
        </div>
        <div className={styles.details__note}>{note}</div>
        <div className={styles.button}>
          <Button onClick={close}>Wydano</Button>
        </div>
      </div>
    </ClickAwayListener>
  );
}
