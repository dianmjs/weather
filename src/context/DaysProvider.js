import React from "react";
export const DaysContext = React.createContext();

const DaysProvider = (props) => {
  const [days, setDays] = React.useState({});

  React.useEffect(() => {
    const key = "4afab7f000fa9c7788b06cbbd16f596d";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=bogota&appid=${key}&units=metric`;
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          const date = JSON.parse(req.responseText);
          console.log("fecha dias 2", date.list[7].dt_txt);
          console.log("temperatura minima 2", date.list[7].main.temp_min);
          setDays({
            //DIA1
            dia: date.list[0].dt_txt,
            estado: date.list[0].weather[0].main,
            temperatureD: date.list[0].main.temp,
            temperatureM: date.list[0].main.temp_min,
            //DIA 2
            dia2: date.list[8].dt_txt,
            estado2: date.list[8].weather[0].main,
            temperatureD2: date.list[8].main.temp,
            temperatureM2: date.list[8].main.temp_min,
            //DIA 3
            dia3: date.list[16].dt_txt,
            estado3: date.list[16].weather[0].main,
            temperatureD3: date.list[16].main.temp,
            temperatureM3: date.list[16].main.temp_min,
          });
          console.log("datos de los dias", date);
        } else {
          console.log("error");
        }
      }
    };
    req.send(null);
  }, []);

  return (
    <DaysContext.Provider value={{ days, setDays }}>
      {props.children}
    </DaysContext.Provider>
  );
};

export default DaysProvider;
