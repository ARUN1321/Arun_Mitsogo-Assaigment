import { Devices } from "../../commons";
import CustomTrials from "../../component/CustomTrials/CustomTrials";
import "./DemoSection.css";

const DemoSection = ({ smallScreen }: any) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="my-class">
          <CustomTrials
            text={
              "Turn your devices into kiosks in a few minutes with Hexnode UEM"
            }
            smallScreen={smallScreen}
            height={smallScreen && "45px"}
          />
          <div className="img-res">
            <div className="img-class-res">
              <img
                className="img"
                loading="lazy"
                width={597}
                height={585}
                srcSet={`${Devices} 1x, ${Devices} 2x`}
                src={Devices}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
