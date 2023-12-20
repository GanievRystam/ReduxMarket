import React from "react";
import styles from '../../styles/Footer.module.css';
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <section className={styles.footer}>
        <div className={styles.logo}>| I
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="Stuff" />
            </Link>
        </div>
        <div className={styles.socials}>
            <a href="#" target="_blank" rel="noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                </svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                </svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                </svg>
            </a>
        </div>
    </section>
 );
};
export default Footer;
 