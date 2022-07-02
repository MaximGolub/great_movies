import { Outlet } from "react-router-dom";
import { Nav } from "./components/";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Outlet />
    </Provider>
  );
}

export default App;
