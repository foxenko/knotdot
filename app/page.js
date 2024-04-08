import { LeftColumn } from "./LeftColumn/LeftColumn";

export default function Home() {
  return (
    <main>
      <LeftColumn />

      <div className="middleColumn"></div>
      <div className="rightColumn"></div>
    </main>
  );
}
