import React from "react";
// Styles
import styles from "./aboutPage.module.scss";
// API
import { ABOUT__CONTENT } from "../../api/API";
import { ABOUT__PROFILE } from "../../api/API";
import sample from "../../assets/2.jpg";

const AboutPage = () => {
  return (
    <div id="Profile" className={styles.about}>
      {ABOUT__CONTENT.map((about, index) => (
        <div key={index} className={styles.about__content}>
          <i>{about[0]}</i>
          <h1>{about[1]}</h1>
          <span>{about[2]}</span>
        </div>
      ))}
      <div className={styles.about__profile}>
        <img className={styles.about__profile__img} src={sample} alt="" />
        <div className={styles.about__profile__img2}>
          <span>PROFESSIONAL PROFILE</span>
          <span>
            I have been crafting beautiful websites, launching stunning brands
            and making clients happy for years.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            quibusdam at iusto, quod rem quos aliquid qui rerum tempore deleniti
            expedita excepturi maiores iure perspiciatis? Rem dignissimos ipsam
            culpa vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat explicabo corporis sapiente aliquid maxime harum qui
            exercitationem ipsa consequuntur necessitatibus. Eveniet eius vitae
            tenetur aliquid! Expedita quasi cumque perspiciatis odio. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque,
            totam blanditiis facilis culpa porro aperiam voluptate ullam
            architecto, eligendi cum dolores voluptatibus minima ut, nisi
            incidunt unde distinctio aliquam.
          </span>
        </div>
        <div className={styles.about__profile__details}>
          {ABOUT__PROFILE.map((profile, index) => (
            <ul key={index} className={styles.about__details__wrapper}>
              <li className={styles.about__details__list}>
                <div className={styles.icon}>{profile.Icon}</div>
                <div className={styles.about__text}>{profile.name}</div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
