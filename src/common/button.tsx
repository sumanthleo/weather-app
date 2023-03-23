import React, { MouseEvent, MouseEventHandler } from "react";

interface IRoundedButton {
  status?: string;
  text: string;
  onClick?: MouseEventHandler;
  styles?: any;
  type?: "button" | "submit" | "reset" | undefined;
  width?: string;
}
const RoundedButton = ({
  status,
  text,
  onClick,
  styles,
  type = undefined,
}: IRoundedButton) => {
  const regularButtonStyle = {
    borderRadius: "30px",
    textAlign: "center",
    // height: "50px",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#FFFFFF",
    fontWeight: "400px",
    padding: "7px",
    border: "1px solid black",
  };

  const activeButtonStyle = {
    backgroundColor: "#14477d",
  };

  const disabledButtonStyle = {
    backgroundColor: "#E9E9E9",
    color: "#D3D3D3",
    border: "none",
    cursor: "inherit",
  };

  const styleApplied =
    status === "active"
      ? { ...regularButtonStyle, ...activeButtonStyle }
      : status === "disabled"
      ? { ...regularButtonStyle, ...disabledButtonStyle }
      : regularButtonStyle;

  return (
    <button
      className="rounded-button"
      style={{ ...styleApplied, ...styles }}
      type={type ? type : undefined}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        status !== "disabled" && onClick && onClick(e);
      }}
      disabled={status === "disabled"}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
