/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
    state: boolean;
  }[];
  note: string;
};

function OrderDetails({ handleClickAway, dish, note }: OrederDetailsProps) {
  const close = () => {
    handleClickAway();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.details}>
        <div className={styles.dateailsIcon} onClick={handleClickAway}>
          <CloseIcon />
        </div>
        <div className={styles.dateailsTitle}>Szczegóły zamówienia</div>
        <div className={styles.dateailsDishes}>
          {dish?.map(({ name, quantity, state }) => {
            return (
              <div className={styles.dateailsDish}>
                {state ? (
                  <span style={{ color: '#4CBB17' }}>
                    {name} x {quantity}
                  </span>
                ) : (
                  <span style={{ color: '#000' }}>
                    {name} x {quantity}
                  </span>
                )}

                <CheckIcon />
              </div>
            );
          })}
        </div>
        <div className={styles.dateailsNote}>{note}</div>
        <div className={styles.button}>
          <Button onClick={close}>Wydano</Button>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default OrderDetails;
