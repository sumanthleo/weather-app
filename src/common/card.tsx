import React from "react";
interface ICard {
  title: string;
  description?: string;
  boldText?: string;
  text?: string;
  width?: string;
  height?: string;
  bgColor?: string;
}
const Card = ({
  title,
  description,
  boldText,
  text,
  width,
  height,
  bgColor,
}: ICard) => {
  return (
    <div
      style={{
        width: width ? width : "200px",
        height: height ? height : "200px",
        backgroundColor: bgColor ? bgColor : "green",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "40px 2px",
        padding: "30px 10px",
      }}
    >
      <div
        style={{
          fontSize: "35px",
          fontWeight: "500",
          paddingLeft: "10px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "300",
          paddingLeft: "10px",
        }}
      >
        {description}
      </div>
      <div
        style={{
          fontSize: "55px",
          fontWeight: "500",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {boldText}
      </div>
      <div
        style={{
          fontSize: "25px",
          fontWeight: "400",
          paddingLeft: "10px",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Card;
