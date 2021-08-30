import React from "react";

import styles from "./CountLines.module.scss";

interface CountLinesTypes {
  kmValue?: number;
  optionKG?: string;
  optionKM?: string;
  minValue?: number;
  kgOption?: boolean;
  optionDISC?: string;
  kgClick?: () => void;
  optionKGInfo?: string;
  discountValue?: number;
  kmHandler?: (e: any) => void;
  discountHandler?: (e: any) => void;
}

const CountLines = ({
  kgClick,
  kmValue,
  optionKG,
  kgOption,
  optionKM,
  kmHandler,
  optionDISC,
  optionKGInfo,
  discountValue,
  discountHandler,
}: CountLinesTypes) => {
  return (
    <div className={styles.count}>
      <label className={styles.count__kmlabel} id="1km">
        <input
          id="1km"
          type="number"
          value={kmValue}
          onChange={kmHandler}
          className={styles.count__kmlabel__inp}
        />
        1 километр {optionKM}.
      </label>
      {optionKG ? (
        <div className={styles.count__btn_block}>
          <button className={styles.count__btn_block_btn} onClick={kgClick}>
            {optionKG}
          </button>
          <p>{optionKGInfo}</p>
        </div>
      ) : null}
      {optionDISC ? (
        <>
          <label className={styles.count__discount} id="7disount">
            <input
              className={styles.count__discount_inp}
              placeholder="Client's age"
              max={100}
              onChange={discountHandler}
              value={discountValue}
              id="7disount"
              type="number"
            />
            {optionDISC}
          </label>
        </>
      ) : null}
      {kgOption ? (
        <p className={styles.count__option_kg}>{optionKGInfo}</p>
      ) : null}
    </div>
  );
};

export default CountLines;
