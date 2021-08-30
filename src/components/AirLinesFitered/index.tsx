import React, { SetStateAction, FC } from "react";

import styles from "./AirLinesFitered.module.scss";

interface AirLinesFiteredProp {
  oneOption: string;
  twoOption: string;
  threeOption: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<SetStateAction<number>>;
}

const AirLinesFitered: FC<AirLinesFiteredProp> = ({
  oneOption,
  twoOption,
  threeOption,
  activeIndex,
  setActiveIndex,
}) => {
  const activeIndexHandler = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <main className={styles.filtered}>
      <button
        onClick={() => activeIndexHandler(0)}
        className={activeIndex === 0 ? styles.filtered__active : ""}
      >
        {oneOption}
      </button>
      <button
        onClick={() => activeIndexHandler(1)}
        className={activeIndex === 1 ? styles.filtered__active : ""}
      >
        {twoOption}
      </button>
      <button
        onClick={() => activeIndexHandler(2)}
        className={activeIndex === 2 ? styles.filtered__active : ""}
      >
        {threeOption}
      </button>
    </main>
  );
};

export default AirLinesFitered;
