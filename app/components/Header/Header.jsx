import Styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={Styles["header"]}>
      <a className={Styles["logo"]}>
        <img
          className={Styles["logo__image"]}
          src="/images/logo.png"
          alt="logo"
        />
      </a>
      <nav>
        <a href="/login" className={Styles["nav__link"]}>Login</a>

      </nav>
    </header>
  );
};
