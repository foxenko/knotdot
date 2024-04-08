import Styles from "./ProfileChat.module.css";

export const ProfileChat = () => {
  return (
    <div className={Styles["profileChat"]}>
      <div className={Styles["profileChatChild"]}>
        <img
          className={Styles["profilePicture"]}
          src="/images/profilePicture.jpeg"
          alt="profilePicture"
        />
      </div>
    </div>
  );
};
