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
        <div className={Styles["info"]}>
          <h3 className={Styles["profileName"]}>Phillip Du</h3>
          <p className={Styles["lastMessage"]}>Кароче, Василь иди нахуй!!</p>
        </div>
      </div>
    </div>
  );
};
