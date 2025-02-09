import CustomTrials from "../../component/CustomTrials/CustomTrials";
import "./SignTry.css";

const SignTry = ({ smallScreen }: any) => {
  return (
    <div className="cont-element">
      <div
        className="signtry-div"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <CustomTrials
          text={"Sign up and try Hexnode free for 14 days!"}
          smallScreen={smallScreen}
          height={smallScreen && "45px"}
        />
      </div>
    </div>
  );
};

export default SignTry;
