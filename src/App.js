import Cart from "./components/Cart/Cart";
import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
