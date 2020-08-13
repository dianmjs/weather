import React from "react";
export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [temp, setTemp] = React.useState({});

  React.useEffect(() => {
    const key = "4afab7f000fa9c7788b06cbbd16f596d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=${key}&units=metric`;
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          const date = JSON.parse(req.responseText);
          console.log("icon", date.weather[0].icon);
          setTemp({
            temperature: date.main.temp,
            icon: date.weather[0].icon,
            name: date.name,
            estado: date.weather[0].main,
          });
          console.log("datos api", date);
        } else {
          console.log("error");
        }
      }
    };
    req.send(null);
  }, []);

  return (
    <ThemeContext.Provider value={{ temp, setTemp }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
