import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { FullPageContainer, Nav, CirculedIconButton } from "./components";
import themes from "./themes";
import { Routes, Route } from "react-router-dom";
import routes from "./constants/routes";
import { Outlet } from "react-router-dom";
import Landing from "./pages/LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  const [theme, setTheme] = useState("lightTheme");
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    setTheme(isOn ? "lightTheme" : "darkTheme");
  }, [isOn]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <CirculedIconButton
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          color: `${themes[theme].colors.backgroundColor}`,
          background: `${themes[theme].colors.buttonBackground}`,
        }}
        onClick={() => setIsOn(!isOn)}
      >
        <FontAwesomeIcon icon={["fa", "lightbulb"]} />
      </CirculedIconButton>
      <FullPageContainer>
        <Nav appName="DSA" routes={routes}></Nav>
        <br />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Outlet />
      </FullPageContainer>
    </ThemeProvider>
  );
}

export default App;
