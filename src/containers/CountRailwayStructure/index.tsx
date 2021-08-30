import React, { useState, ChangeEvent } from "react";

import { AirLinesFitered, AeroFlot, CountRailway } from "../../components";

import styles from "./CountRailwayStructure.module.scss";

const CountRailwayStructure = () => {
  const [kgValue, setKgValue] = useState<number>(15);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [kmEconomValue, setKmEconomValue] = useState<number>(0);
  const [discountValue, setDiscountValue] = useState<number>(18);

  const [kmAdvancedValue, setKmAdvancedValue] = useState<number>(1);
  const [advancedKgValue, setAdvancedKgValue] = useState<number>(20);

  const [luxeKmValue, setLuxeKmValue] = useState<number>(4);

  const isSale = discountValue < 7;
  const calculateSalePrice = isSale
    ? (kmEconomValue * 0.5) / 2
    : kmEconomValue * 0.5;
  const calculateDeleveryPrice = kgValue > 15 ? (kgValue - 15) * 50 : 0;

  const calculateTotalPrice = calculateSalePrice + calculateDeleveryPrice;

  const kmHandler = (e: ChangeEvent<{ value: number }>) => {
    const kilometrPrice = e.target.value;
    setKmEconomValue(kilometrPrice);
  };
  const kgHandler = (e: ChangeEvent<{ value: any }>) => {
    setKgValue(e.target.value.trim());
  };

  const discountHandler = (e: ChangeEvent<{ value: number }>) => {
    setDiscountValue(e.target.value);
  };

  const kgAdvancedHandler = (e: ChangeEvent<{ value: number }>) => {
    setAdvancedKgValue(e.target.value);
  };

  const kmAdvancedHandler = (e: ChangeEvent<{ value: number }>) => {
    setKmAdvancedValue(e.target.value);
    setLuxeKmValue(e.target.value);
  };

  let discountAdvancedPrice = ((kmAdvancedValue * 2) / 100) * 30;

  let discountedPrice =
    discountValue < 9
      ? kmAdvancedValue * 2 - discountAdvancedPrice
      : kmAdvancedValue * 2;

  let kgAdvancedPriceCount =
    advancedKgValue > 20 ? (advancedKgValue - 20) * 50 : 0;

  let luxeDiscount =
    discountValue < 17
      ? luxeKmValue * 4 - ((luxeKmValue * 4) / 100) * 20
      : luxeKmValue * 4;

  const aeroOption = () => {
    if (activeIndex === 0) {
      return (
        <div>
          <CountRailway
            optionKG={kgValue}
            kgHandler={kgHandler}
            optionKM="0.5 рубля"
            kmHandler={kmHandler}
            kmValue={kmEconomValue}
            discountValue={discountValue}
            discountHandler={discountHandler}
            optionDISC="Детям до 5 лет скидка 50% (без учета багажа)."
            optionKGInfo="Стоимость провоза багажа свыше 15 кг 50 рублей за 1 кг. Максимальный вес багажа 50 кг."
          />
          <div className={styles.aero_container}>
            <p className={styles.aero_container__price_km}>
              {kmEconomValue} километра
              {discountValue < 7
                ? (kmEconomValue * 0.5) / 2
                : kmEconomValue * 0.5}
              р
            </p>
            <p className={styles.aero_container__global_price}>
              {calculateTotalPrice}
            </p>
          </div>
        </div>
      );
    } else if (activeIndex === 1) {
      return (
        <div>
          <div>
            <CountRailway
              optionKM="2 рубля."
              kmValue={kmAdvancedValue}
              optionKG={advancedKgValue}
              kgHandler={kgAdvancedHandler}
              kmHandler={kmAdvancedHandler}
              discountValue={discountValue}
              discountHandler={discountHandler}
              optionDISC="Детям до 8 лет скидка 30% (без учета багажа)."
              optionKGInfo="Стоимость провоза багажа свыше 20 кг 50 рублей за кг. Максимальный вес багажа 60 кг."
            />
            <div className={styles.aero_container}>
              <p className={styles.aero_container__price_km}>
                {kmAdvancedValue} километра
                {discountValue < 9 ? discountedPrice : kmAdvancedValue * 2}р
              </p>
              <p className={styles.aero_container__global_price}>
                {discountedPrice + kgAdvancedPriceCount}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (activeIndex === 2) {
      return (
        <div>
          <CountRailway
            kgInfoCountPricees
            optionKM=" 4 рубля"
            kmValue={luxeKmValue}
            optionKG={advancedKgValue}
            kmHandler={kmAdvancedHandler}
            kgHandler={kgAdvancedHandler}
            discountValue={discountValue}
            discountHandler={discountHandler}
            optionDISC="Детям до 16 лет скидка 20%."
            kgOption="Стоимость провоза багажа бесплатно. Максимальный вес багажа 60 кг."
          />
          <div className={styles.aero_container}>
            <p className={styles.aero_container__price_km}>
              {luxeKmValue} километра
              {luxeDiscount}р
            </p>
            <p className={styles.aero_container__global_price}>
              {luxeDiscount}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <AeroFlot src="EK">
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

export default CountRailwayStructure;
