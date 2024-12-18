import { Outlet } from "react-router-dom";
import Navbar from "./componetnts/navbar/Navbar";

const App = () => {
  return (
    <section>
      <article>
        <Navbar />
      </article>
      <article>
        <Outlet />
      </article>
    </section>
  );
};

export default App;
