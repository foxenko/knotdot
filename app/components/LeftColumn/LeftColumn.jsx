import Styles from "./LeftColumn.module.css";
import { ProfileChat } from "../ProfileChat/ProfileChat";

export const LeftColumn = () => {
  return (
    <div className={Styles["leftColumn"]}>
      <button className="menuButton">|||</button>
      <div className="searchInput">search</div>
      <div className="chatList">
        <ProfileChat />
        <ProfileChat />
        <ProfileChat />
        <ProfileChat />
        <ProfileChat />
      </div>
    </div>
  );
};
