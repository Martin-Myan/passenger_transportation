import React, { useState, ChangeEvent } from "react";

import { AeroFlot, AirLinesFitered, CountLines } from "../../components";

import styles from "./AeroFLotStructure.module.scss";

const AeroFLotStructure = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [economCount, setEconomCount] = useState<number>(0);
  const [activeClick, setActiveClick] = useState<boolean>(true);
  const [kmEconomValue, setKmEconomValue] = useState<number>(0);

  const [advancedValue, setAdvancedValue] = useState<number>(0);
  const [discountValue, setDiscountValue] = useState<number>(18);
  const [kmAdvancedValue, setKmAdvancedValue] = useState<number>(0);

  const [kmLuxeValue, setKmLuxeValue] = useState<number>(0);

  const kmHandler = (e: ChangeEvent<{ value: number }>) => {
    setKmEconomValue(e.target.value);
  };

  const kgClick = () => {
    setActiveClick(!activeClick);
    if (activeClick === true) {
      setEconomCount(economCount + 4000);
    } else if (activeClick === false && economCount !== 0) {
      setEconomCount(economCount - 4000);
    }
  };

  const kmAdvancedHandler = (e: ChangeEvent<{ value: number }>) => {
    setKmAdvancedValue(e.target.value);
  };

  const kgAdvancedClick = () => {
    setActiveClick(!activeClick);
    if (activeClick === true) {
      setAdvancedValue(advancedValue + 5000);
    } else if (activeClick === false && advancedValue !== 0) {
      setAdvancedValue(advancedValue - 5000);
    }
  };

  const discountHandler = (e: ChangeEvent<{ value: number }>) => {
    setDiscountValue(e.target.value);
  };

  let advancedDiscount = () => {
    if (
      discountValue < 8 &&
      discountValue !== 0 &&
      discountValue !== null &&
      discountValue !== undefined
    ) {
      return ((advancedValue + kmAdvancedValue * 8) / 100) * 30;
    } else {
      return 0;
    }
  };

  const kmLuxeHandler = (e: ChangeEvent<{ value: number }>) => {
    setKmLuxeValue(e.target.value);
  };

  let luxeDiscount = () => {
    if (
      discountValue < 17 &&
      discountValue !== 0 &&
      discountValue !== null &&
      discountValue !== undefined
    ) {
      return ((kmLuxeValue * 15) / 100) * 30;
    } else {
      return 0;
    }
  };

  const aeroOption = () => {
    if (activeIndex === 0) {
      return (
        <div>
          <CountLines
            minValue={5}
            optionKG="+ 5 кг"
            kgClick={kgClick}
            optionKM="4 рубля"
            kmHandler={kmHandler}
            kmValue={kmEconomValue}
            optionKGInfo="+ 5 кг стоит 4000 рублей. MAX kg 20kg"
          />
          <div className={styles.aero_container}>
            <p className={styles.aero_container__price_km}>
              {kmEconomValue} километра {kmEconomValue * 4}р
            </p>
            <p className={styles.aero_container__global_price}>
              {economCount + kmEconomValue * 4}
            </p>
          </div>
        </div>
      );
    } else if (activeIndex === 1) {
      return (
        <div>
          <CountLines
            optionKG="+ 20 кг"
            optionKM="8 рубля"
            kmValue={kmAdvancedValue}
            kgClick={kgAdvancedClick}
            kmHandler={kmAdvancedHandler}
            discountValue={discountValue}
            discountHandler={discountHandler}
            optionKGInfo="+ 20 кг стоит 5000 рублей. MAX kg 50kg"
            optionDISC="Детям до 7 лет скидка 30% (без учета багажа)."
          />
          <div className={styles.aero_container}>
            <p className={styles.aero_container__price_km}>
              {kmAdvancedValue} километра {kmAdvancedValue * 8}р
            </p>
            <p className={styles.aero_container__global_price}>
              {advancedValue + kmAdvancedValue * 8 - advancedDiscount()}
              {discountValue < 8 ? "- 30%" : ""}
            </p>
          </div>
        </div>
      );
    } else if (activeIndex === 2) {
      return (
        <div>
          <CountLines
            optionKM="15 рубля"
            kmValue={kmLuxeValue}
            kmHandler={kmLuxeHandler}
            discountValue={discountValue}
            kgOption
            discountHandler={discountHandler}
            optionDISC="Детям до 16 лет скидка 30% (без учета багажа)."
            optionKGInfo="+ 50 кг, Стоимость провоза багажа бесплатно."
          />
          <div className={styles.aero_container}>
            <p className={styles.aero_container__price_km}>
              {kmLuxeValue} километра {kmLuxeValue * 15}р
            </p>
            <p className={styles.aero_container__global_price}>
              {discountValue < 17 ? "- 30% " : ""}
              {advancedValue + kmLuxeValue * 15 - luxeDiscount()}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <AeroFlot src="SU">
        <AirLinesFitered
          oneOption="Эконом"
          threeOption="Люкс"
          twoOption="Продвинутый"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        {aeroOption()}
      </AeroFlot>
    </div>
  );
};

export default AeroFLotStructure;
