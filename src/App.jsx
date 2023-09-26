import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Component/Header";
import "./App.css";
import CartBody from "./Component/Cart/CartBody";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section>
          <header>
            <Header />{" "}
          </header>{" "}
        </section>
        <body>
          <CartBody />
        </body>
      </main>
    </>
  );
}

export default App;
