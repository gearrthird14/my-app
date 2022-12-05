import React, { useEffect } from "react";
// Styles
import styles from "./topNav.module.scss";
// Props Interface
import { GlobalState } from "../../App";
// API
import { NAV_TITLE } from "../../api/API";
// react-scroll
import { Link } from "react-scroll";

const TopNav = (GlobalState: GlobalState, refprop: any) => {
  const { isShow, setShow, isActive, setIsActive } = GlobalState;

  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.addEventListener("scroll", transitionNav);
  });

  return (
    <div className={`${styles.nav} ${isShow && styles.nav__black}`}>
      <div className={styles.nav_contents}>
        <Link to="Home" smooth={true} className={styles.nav__Logo}>LOGO</Link>
        <div className={styles.nav__tabsWrapper}>
          {NAV_TITLE.map((navigation, index) => (
            <Link
              to={navigation.title}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={navigation.offset}
              duration={1000}
              key={index}
              className={styles.nav__tabs}
            >
              {navigation.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
