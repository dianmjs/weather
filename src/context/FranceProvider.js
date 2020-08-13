import React from "react";
export const FranceContext = React.createContext();

const FranceProvider = (props) => {
  const [temF, setTemF] = React.useState({});

  React.useEffect(() => {
    const key = "4afab7f000fa9c7788b06cbbd16f596d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${key}&units=metric`;
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        if (req.status === 200) {
          const date = JSON.parse(req.responseText);

          setTemF({
            temperatureF: date.main.temp,
            humidity: date.main.humidity,
            nameF: date.name,
            presion: date.main.pressure,
          });
        } else {
          console.log("error");
        }
      }
    };
    req.send(null);
  }, []);

  return (
    <FranceContext.Provider value={{ temF, setTemF }}>
      {props.children}
    </FranceContext.Provider>
  );
};

export default FranceProvider;
