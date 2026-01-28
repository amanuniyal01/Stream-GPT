import { useEffect } from "react";
import Body from "./components/Body.jsx";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import { Toaster } from "react-hot-toast";


function AppContent() {
  const mode = useSelector((store) => store.Theme.mode);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <>
      <Body />
      <Toaster position="top-center" />
    </>
  );
}

function App() {
  return (
    <Provider store={appStore}>
      <AppContent />
    </Provider>
  );
}

export default App;
