import CustomButton from "../CustomButton/CustomButton";
import "./CustomTrials.css";

const CustomTrials = ({ text, smallScreen, height }: any) => {
  return (
    <div className="main-div">
      <div className="element">
        <div className="font-size">{text}</div>
      </div>
      <div className="solutions_wrapper__6y5DU">
        <div style={{ width: "100%", marginRight: "24px" }}>
          <input
            placeholder="Your Work Email"
            type="text"
            name="email"
            required
            className="input"
          ></input>
        </div>
        <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
          <CustomButton title={""} height={height} smallScreen={smallScreen} />
        </a>
      </div>
    </div>
  );
};

export default CustomTrials;
