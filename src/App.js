import React from "react";
import TopBarnner from "./components/TopBarnner";
import CentralBarnner from "./components/CentralBarnner";
import ThemeProvider from "./context/ThemeProvider";
import FranceProvider from "./context/FranceProvider";
import DaysProvider from "./context/DaysProvider";

function App() {
  return (
    <DaysProvider>
      <FranceProvider>
        <ThemeProvider>
          <TopBarnner />
          <CentralBarnner />
        </ThemeProvider>
      </FranceProvider>
    </DaysProvider>
  );
}

export default App;
