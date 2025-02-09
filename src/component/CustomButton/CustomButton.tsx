import "./CustomButton.css";

const CustomButton = ({
  title,
  height,
  onClick,
  fontSize,
  color,
  nolink,
  textcolor,
  smallScreen,
}: any) => {
  return (
    <div
      className="button-class"
      style={{
        padding: smallScreen && "0px",
        backgroundColor: color || "#bb022a",
      }}
    >
      <a
        aria-label="14 Days Free Trial"
        className="your-button"
        onClick={onClick}
        style={{
          height: height ? height : 45,
          fontSize: fontSize || "",
          color: textcolor,
          backgroundColor: color || "#bb022a",
        }}
      >
        {title ? title : "GET STARTED NOW!"}
      </a>
    </div>
  );
};

export default CustomButton;
