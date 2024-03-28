import Styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={Styles["footer"]}>
      <a className={Styles["logo"]}>
        <img
          className={Styles["logo__image"]}
          src="/images/logo.png"
          alt="logo"
        />
      </a>
    </footer>
  );
};
