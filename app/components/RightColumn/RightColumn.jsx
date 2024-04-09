import Styles from "./RightColumn.module.css";

export const RightColumn = () => {
  return (
    <div className={Styles["rightColumn"]}>
      <button className="menuButton">|||</button>
      <div className="searchInput">search</div>
      <div className="chatList"></div>
    </div>
  );
};
