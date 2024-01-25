import ServerComponent from "./ServerComponent";
import Client from "./Client";
export default function Home() {
  return (
    <>
      <Client>
        <ServerComponent />
      </Client>
    </>
  );
}
