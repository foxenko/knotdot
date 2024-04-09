import Styles from "./Messenger.module.css";
import { LeftColumn } from "@/app/components/LeftColumn/LeftColumn";


export const Messenger = () => {
  return (
    <div className={Styles["main"]}>
      <LeftColumn />
      <div className="middleColumn"></div>
      <div className="rightColumn"></div>
    </div>
  );
};
