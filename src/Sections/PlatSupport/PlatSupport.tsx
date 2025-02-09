import { platforms } from "../../commons";
import "./PlatSupport.css";

const PlatSupport = () => {
  return (
    <div className="plat-cont">
      <div className="plat-div">
        <h2 className="text">Platforms supported</h2>
        <div className="plat-element">
          {platforms.map((ele) => {
            return (
              <div className="element">
                <div className="icon-element">
                  <img
                    loading="lazy"
                    width="190"
                    height="72"
                    style={{ color: "transparent" }}
                    className="img"
                    srcSet={!ele.includes("svg") ? `${ele} 1x, ${ele} 2x` : ""}
                    src={ele}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatSupport;
