import React, { useState, useEffect } from "react";
// API
import { SKILLS__BUTTON } from "../../api/API";
import { SKILLS__TAB } from "../../api/API";
import { GlobalState } from "../../App";
// Styles
import styles from "./skills.module.scss";
// Framer Motion
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
// Intersection observer
import { useInView } from "react-intersection-observer";

const Skills = (GlobalState: GlobalState) => {
  const { isActive, setIsActive } = GlobalState as GlobalState;

  const [filteredSkills, setFilteredSkills] = useState(SKILLS__TAB);

  const animation = useAnimation();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const filterHandler = (skill: any) => {
    const result = SKILLS__TAB.filter((position) => {
      return position.category === skill;
    });
    setFilteredSkills(result);
  };

  const onClickHandler = (i: any) => {
    if (i === 1) {
      filterHandler("frontend");
    } else if (i === 2) {
      filterHandler("backend");
    } else if (i === 3) {
      filterHandler("others");
    } else {
      setFilteredSkills(SKILLS__TAB);
    }
    setIsActive(i);
  };
  return (
    <div ref={ref} id="Skills" className={styles.skills}>
      <div className={styles.skills__Wrapper}>
        <i>What I can do</i>
        <h1>SKILLS</h1>
      </div>
      <div className={styles.skills__btn_wrapper}>
        {SKILLS__BUTTON.map((button, i) => (
          <button
            key={i}
            onClick={() => onClickHandler(i)}
            className={`${styles.skills__btn} ${
              isActive === i && styles.active
            }`}
          >
            {button.btn}
          </button>
        ))}
      </div>
      <div className={styles.skills__tab}>
        {filteredSkills.map((tab) => {
          const { name, img, id, category } = tab;
          return (
            <motion.div
              key={id}
              className={styles.skills__tab__list}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <img src={img} alt={category} />
              <span>{name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
