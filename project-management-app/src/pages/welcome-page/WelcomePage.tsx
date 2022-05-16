import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
import logo from './assets/trello.svg';
import hero from './assets/hero.png';
import cn from 'classnames';
import { useAppSelector } from '../../redux-hooks/redux-hooks';
import { useTranslation } from 'react-i18next';
import CustomSelect from '../../components/custom-select/CustomSelect';

const WelcomePage = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const [scroll, setScroll] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const scrollHandler = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={styles.welcome_page}>
      <div className={cn(styles.header_wrapper, { [styles.scroll]: scroll })}>
        <header className={styles.header}>
          <Link to="/" className={styles.header__logo}>
            <img width={25} src={logo} alt="logo" />
            <span>Trello</span>
          </Link>
          <div className={styles.btn_wrapper}>
            {isAuth ? (
              <div>
                <Link to="/main">
                  <button>Go to Main Page</button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button>Log in</button>
                </Link>
                <Link to="/registration">
                  <button>Sign up</button>
                </Link>
              </div>
            )}
            <CustomSelect />
          </div>
        </header>
      </div>
      <div className={styles.intro}>
        <div className={styles.intro__block}>
          <div className={styles.intro__title}>{t('title1')}</div>
          <p>
            Collaborate, manage projects, and reach new productivity peaks. From high rises to the
            home office, the way your team works is unique—accomplish it all with Trello.
          </p>
        </div>
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default WelcomePage;
