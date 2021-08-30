import React, { FC } from "react";

import styles from "./AeroFlot.module.scss";

interface AeroFlotTypes {
  src: string;
  children?: React.ReactNode;
}

const AeroFlot: FC<AeroFlotTypes> = ({ children, src }) => {
  return (
    <div className={styles.aerocont}>
      <img
        alt="logo"
        className={styles.aerocont__logo}
        src={`https://pics.avs.io/99/36/${src}.png`}
      />
      {children}
    </div>
  );
};

export default AeroFlot;
