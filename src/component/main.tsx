import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import RoundedButton from "../common/button";
import { Country, State, City } from "country-state-city";
import axios from "axios";
import Card from "../common/card";
import ItemLists from "./item-lists";

const API_KEY = "d0f30d0ef26524ab8fc67add631bf76d";

const MainContainer = styled.div`
  display: flex,
  flex-direction: column,
  justify-content: center,
  align-items: center,
  `;

const Container = styled.div`
  // width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FoamContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 550px;
`;
const SelectDiv = styled.div`
  width: 220px;
`;
const NoDataDiv = styled.div`
  margin-top: 60px;
  font-size: 35px;
  font-weight: 500;
  color: red;
`;
const Main = () => {
  const [selectedState, setSelectedState] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [weatherData, setWeatherData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const onClickButton = async () => {
    setError(null);
    setIsLoading(true);
    try {
      if (selectedCity.name === null) {
        setError("select a city");
      }
      const response = await axios.post(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
      setError("Error fetching weather data");
    }
    setIsLoading(false);
  };

  return (
    <>
      <MainContainer>
        <Container>
          <h1>Weather App</h1>
          <FoamContainer>
            <SelectDiv>
              <Select
                options={State.getStatesOfCountry("IN")}
                getOptionLabel={(options) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedState}
                onChange={(item) => {
                  setError(null);
                  setSelectedState(item);
                }}
              />
            </SelectDiv>
            <SelectDiv>
              <Select
                options={City.getCitiesOfState(
                  selectedState?.countryCode,
                  selectedState?.isoCode
                )}
                getOptionLabel={(options) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedCity}
                onChange={(item) => {
                  setSelectedCity(item);
                }}
              />
            </SelectDiv>
            <RoundedButton
              status="active"
              text="submit"
              type="submit"
              onClick={onClickButton}
            />
          </FoamContainer>
          {isLoading && <p style={{ color: "lightblue" }}>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {weatherData ? (
            <>
              <Card
                title={`${weatherData.name}, ${weatherData.sys.country}` || "-"}
                width="80%"
                height="80%"
                boldText={`${weatherData?.main.temp}°C`}
                description={`As of ${time}`}
                bgColor="#e3e1e1"
                text={`${weatherData?.weather[0].description}`}
              />
              <ItemLists data={weatherData} />
            </>
          ) : (
            <NoDataDiv>please select a city</NoDataDiv>
          )}
        </Container>
      </MainContainer>
    </>
  );
};

export default Main;
