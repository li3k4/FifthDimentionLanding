import React from "react";
import styles from "./Content.module.css";
import PrivacyPolicy from "../PrivacyPolicy";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import main from "../../resources/img.png";
const Content = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["item-1"]}>
      <img className={styles["item-1-img"]} src={main}/>
      </div>


      <div className={styles["item-2"]}>
        <div className={styles["item-text"]}>
          <h1>
            “Пятое измерение” - практики, <br />
            способные изменить твою <br />
            жизнь к лучшему
          </h1>
          <h2>
          Саморазвивайся в области здоровья, любви, отношений, денег, концентрации, предназначения.
         Здесь ты найдешь свои личные ключи к Счастью.
          </h2>
        </div>
        <button className={styles["btn"]}> Скачать на Android</button>
        <NavLink to="/policy" element={PrivacyPolicy} className={styles["pp"]}>
          {" "}
          Политика конфиденциальности{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Content;
