import styled from "styled-components";

const ItemListContainer = styled.div`
  width: 80%;
  padding: 5px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 columns
  grid-gap: 20px; // gap between items
`;

const Item = styled.div`
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  border-bottom: 4px dotted rgb(136, 194, 245);
  display: flex;
  justify-content: space-between;
`;
const TitleDiv = styled.div`
  font-weight: 600;
`;
const DescriptionDiv = styled.div``;

const ItemLists = ({ data }: any) => {
  const sunrise_timestamp = data.sys.sunrise;
  const sunrise_date = new Date(sunrise_timestamp * 1000);
  const sunrise_hours = sunrise_date.getHours();
  const sunrise_minutes = sunrise_date.getMinutes();

  const sunset_timestamp = data.sys.sunset;
  const sunset_date = new Date(sunset_timestamp * 1000);
  const sunset_hours = sunset_date.getHours();
  const sunset_minutes = sunset_date.getMinutes();

  console.log(data);
  return (
    <ItemListContainer>
      <Item>
        <TitleDiv>High/Low</TitleDiv>
        <DescriptionDiv>
          {data.main.temp_max}/{data.main.temp_min}
        </DescriptionDiv>
      </Item>
      <Item>
        <TitleDiv>Humidity</TitleDiv>
        <DescriptionDiv>{data.main.humidity}</DescriptionDiv>
      </Item>
      <Item>
        <TitleDiv>Pressure</TitleDiv>
        <DescriptionDiv>{data.main.pressure}</DescriptionDiv>
      </Item>
      <Item>
        <TitleDiv>Visivlity</TitleDiv>
        <DescriptionDiv>{data.visibility} meters</DescriptionDiv>
      </Item>
      <Item>
        <TitleDiv>Wind</TitleDiv>
        <DescriptionDiv>{data.wind.speed} km/hr</DescriptionDiv>
      </Item>
      <Item>
        <TitleDiv>Wind Direction</TitleDiv>
        <DescriptionDiv>{data.wind.deg}°C deg</DescriptionDiv>
      </Item>
      <Item>
        <TitleDiv>Sunrise</TitleDiv>
        <DescriptionDiv>{`${sunrise_hours} : ${sunrise_minutes}mins`}</DescriptionDiv>
      </Item>
      <Item>
        <TitleDiv>Sunset</TitleDiv>
        <DescriptionDiv>{`${sunset_hours} : ${sunset_minutes}mins`}</DescriptionDiv>
      </Item>
    </ItemListContainer>
  );
};

export default ItemLists;
