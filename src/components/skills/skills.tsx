import React from "react";
// API
import { SKILLS__BUTTON } from "../../api/API";
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
          <button className={styles.skills__btn}>
            {button.btn}
          </button>
        ))}
      </div>
      <h1>BOBO KA LEAN TRISSA AREVALO</h1>
    </div>
  );
};

export default Skills;
