import React from "react";
// API
import { SKILLS__BUTTON } from "../../api/API";
import { SKILLS__TAB } from "../../api/API";
// Styles
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <div id="Skills" className={styles.skills}>
      <div className={styles.skills__Wrapper}>
        <i>What I can do</i>
        <h1>SKILLS</h1>
      </div>
      <div className={styles.skills__btn_wrapper}>
        {SKILLS__BUTTON.map((button) => (
          <button className={styles.skills__btn}>{button.btn}</button>
        ))}
      </div>
      <div className={styles.skills__tab}>
        {SKILLS__TAB.map((tab, index) => (
          <div className={styles.skills__tab__list}>
            <img src={tab.img} alt={tab.name} />
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
