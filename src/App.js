import React, { useState, useRef, useLayoutEffect } from "react";
import "./index.css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

const App = () => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState(null);
  const [isFalse, setIsFalse] = useState(false);
  const myRef = useRef(null);
  const handleChangeCityWeather = (e) => {
    setFilter(e.target.value);
  };
  useLayoutEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=36b30956cad8e4c85834f1a46cb61dec"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .then((res) =>
        axios
          .get(
            "https://api.unsplash.com/search/photos?query=London&client_id=5aualamt2KC7W-6LD_lWJYCZazwNlUMrQ6-KkH3wo9Y"
          )
          .then((res) => {
            console.log(res.data.results);
            myRef.current.style.backgroundImage = `url(${res.data.results[0].urls.full})`;
          })
      );
  }, []);
  const handleSearchCity = (e) => {
    console.log(e);
    e.stopPropagation();
    if (filter === "") {
      setIsFalse(true);
    } else {
      let test = /^[" "]+$/;

      if (test.test(filter) === true) {
        setIsFalse(true);
      } else {
        setIsFalse(false);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${filter}&appid=36b30956cad8e4c85834f1a46cb61dec`
          )
          .then((res) => {
            setData(res.data);
          })
          .then((res) =>
            axios
              .get(
                `https://api.unsplash.com/search/photos?query=${filter}&client_id=5aualamt2KC7W-6LD_lWJYCZazwNlUMrQ6-KkH3wo9Y`
              )
              .then((res) => {
                console.log(res.data.results);
                myRef.current.style.backgroundImage = `url(${res.data.results[0].urls.full})`;
              })
          );
      }
    }
  };

  return (
    <div className="App" ref={myRef}>
      <div className="container">
        <div className="search">
          <TextField
            error={isFalse}
            style={{ flex: "1" }}
            id="outlined-error-helper-text"
            label={isFalse ? "Error" : ""}
            helperText={isFalse ? "Incorrect entry" : ""}
            variant="outlined"
            value={filter}
            onChange={(e) => handleChangeCityWeather(e)}
            placeholder="Search..."
          />

          <Fab
            aria-label="search"
            onClick={(e) => handleSearchCity(e)}
            style={{ marginLeft: "7px" }}
          >
            <SearchIcon />
          </Fab>
        </div>
        {data && (
          <div className="city" style={{ width: "100%" }}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weather in {data.name}
                  </Typography>
                  <Typography color="textSecondary" variant="h5" component="h6">
                    {Math.abs((273.15 - data.main.temp).toFixed(2))} °C
                  </Typography>
                  <Typography color="textSecondary" variant="h5" component="h6">
                    <CardMedia
                      component="img"
                      alt={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      image={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      title="Contemplative Reptile"
                      style={{ width: "60px" }}
                    />
                  </Typography>
                  <Typography color="textSecondary" variant="h5" component="h6">
                    {data.weather[0].description}
                  </Typography>
                  <Typography color="textSecondary" variant="h6" component="h6">
                    Humidity: {data.main.humidity} %
                  </Typography>
                  <Typography color="textSecondary" variant="h6" component="h6">
                    Wind speed: {data.wind.speed} km/h
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
