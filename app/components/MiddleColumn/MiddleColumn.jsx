import Styles from "./MiddleColumn.module.css";

export const MiddleColumn = () => {
  return (
    <div className={Styles["middleColumn"]}>
      <button className="menuButton">|||</button>
      <div className="searchInput">search</div>
      <div className="chatList"></div>
    </div>
  );
};
