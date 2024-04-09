import Styles from "./LeftColumn.module.css";
import { ProfileChat } from "../ProfileChat/ProfileChat";

export const LeftColumn = () => {
  return (
    <div className={Styles["leftColumn"]}>
      <div className={Styles["menu"]}>
        <button className={Styles["menuButton"]}>
          <img
            className={Styles["menuButtonImage"]}
            src="/images/menuButton.svg"
            alt="menu"
          />
          
        </button>
        <div className="searchInput">search</div>
      </div>
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
