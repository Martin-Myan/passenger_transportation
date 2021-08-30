import React from "react";

import styles from "./CountRaileay.module.scss";

interface CountRaileayTypes {
  kmValue?: number;
  optionKM?: string;
  kgOption?: string;
  optionKG?: number;
  optionDISC?: string;
  optionKGInfo?: string;
  discountValue?: number;
  kmHandler?: (e: any) => void;
  kgHandler?: (e: any) => void;
  kgInfoCountPricees?: boolean;
  discountHandler?: (e: any) => void;
}

const CountRaileay = ({
  kmValue,
  optionKG,
  kgOption,
  optionKM,
  kgHandler,
  kmHandler,
  optionDISC,
  optionKGInfo,
  discountValue,
  discountHandler,
  kgInfoCountPricees,
}: CountRaileayTypes) => {
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
      {!kgInfoCountPricees ? (
        <div className={styles.count__btn_block}>
          <input
            type="number"
            value={optionKG}
            onChange={kgHandler}
            className={styles.count__btn_block_btn}
          />

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

export default CountRaileay;
