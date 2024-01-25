import Image from "next/image";
import styles from "./page.module.css";
import { ServerComponent as Counter } from "./Counter";
import Client from "./Client";
export default function Home() {
  return (
    <>
      <Client>
        <Counter />
      </Client>
    </>
  );
}
