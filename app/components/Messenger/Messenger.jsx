import Styles from "./Messenger.module.css";
import { LeftColumn } from "@/app/components/LeftColumn/LeftColumn";
import { MiddleColumn } from "../MiddleColumn/MiddleColumn";
import { RightColumn } from "../RightColumn/RightColumn";

export const Messenger = () => {
  return (
    <div className={Styles["main"]}>
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
};
