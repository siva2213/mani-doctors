import Register from "./pages/Register";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./pages/Succes";
import DoctorOnboarding from "./pages/Onboarding/DoctorOnboarding";
import RegistrationPopup from "./pages/RegistrationPopup";
import BottomNav from "./component/BottomNav";
import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Doctor from "./pages/Doctor/Doctor";
import { CarouselStacked } from "./pages/DoctorDetails/components/Carousel";
import Stack from "./component/Stack/Stack";
import Payment from "./pages/Payment/Payment";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./pages/Home/Theme";
import BkSuccess from "./pages/BkSuccess/BkSuccess";

export const globalStateContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
    }
  }, []);

  return (
    <globalStateContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        {/* <Register /> */}

        <ThemeProvider
          className=' overflow-hidden'
          theme={darkMode ? darkTheme : lightTheme}
        >
          <Router>
            <Routes>
              <Route
                path='/'
                element={<Register darkMode={darkMode} />}
              ></Route>
              <Route
                path='/home'
                element={<Home darkMode={darkMode} />}
              ></Route>
              <Route
                path='/Doctordetails'
                element={<DoctorDetails darkMode={darkMode} />}
              ></Route>
              <Route path='/success' element={<Success darkMode />}></Route>
              <Route
                path='/doctorboarding'
                element={<DoctorOnboarding />}
              ></Route>
              <Route path='/popup' element={<RegistrationPopup />}></Route>
              <Route path='/doctor' element={<Doctor />}></Route>
              <Route path='/payment' element={<Payment />}></Route>
              <Route path='/bksuccess' element={<BkSuccess />}></Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </globalStateContext.Provider>
  );
}

export default App;
