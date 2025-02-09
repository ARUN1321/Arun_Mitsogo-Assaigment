import { useState } from "react";
import { choose_Hexa } from "../../commons";
import AutoSwipe from "../../component/AutoSwipe/AutoSwipe";
import "./ChooseHexanode.css";

const ChooseHexanode = ({smallScreen} : any) => {
  const [displayBox, setdisplayBox] = useState<any>(choose_Hexa[0]);

  const changeRightInfo = () => {
    let index = choose_Hexa.indexOf(displayBox);
    if (index === 0) {
      setdisplayBox(choose_Hexa[0])
      return;
    }
    setdisplayBox(choose_Hexa[index === 2 ? 1 : index === 1 ? 0 : index]);
  };

  const changeLeftInfo = () => {
    let index = choose_Hexa.indexOf(displayBox);
    if (index === 2) {
      return;
    }
    setdisplayBox(choose_Hexa[index + 1]);
  };

  return (
    <div className="choose-container">
      <div className="main-choose-container">
        <h2 className="choose-text">Why should you choose Hexnode?</h2>
        <div className="maindiv" style={{ display: "flex", maxWidth: smallScreen && '400px' }}>
          <div
            style={{
              alignSelf: "center",
            }}
            onClick={() => changeRightInfo()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                width: "50px",
                border: "solid",
                borderColor: "white",
                borderRadius: 5,
                height: "50px",
                backgroundColor: "white",
              }}
            >
              <img src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"></img>
            </div>
          </div>
          {displayBox && (
            <div className="divelement" style={{ margin: "10px" }}>
              <div className="scrollelement">
                <img
                  alt="Justin Modrak image"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="imgelement"
                  sizes="100vw"
                  srcSet={`${displayBox.profileimg} 640w, ${displayBox.profileimg} 750w, ${displayBox.profileimg} 828w, ${displayBox.profileimg} 1080w,${displayBox.profileimg} 1200w, ${displayBox.profileimg} 1920w, ${displayBox.profileimg} 2048w, ${displayBox.profileimg} 3840w`}
                  src={displayBox.profileimg}
                />
              </div>
              <div
                className="infoboxelement"
                style={{ paddingLeft: "60px", paddingRight: "55px" }}
              >
                <h4 className="deselement">
                  <div className="destextformate">{displayBox.description}</div>
                </h4>
                <div
                  className="infoelement"
                  style={{
                    border: "black",
                    borderStyle: "solid",
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: 0,
                  }}
                >
                  <p className="paraele">{displayBox.name}</p>
                  <small className="subinfotext">{displayBox.role}</small>
                  <small className="subinfotext">{displayBox?.info}</small>
                </div>
              </div>
            </div>
          )}
          <div
            style={{
              alignSelf: "center",
            }}
            onClick={() => changeLeftInfo()}
          >
            <div
              style={{
                display: "flex",
                padding: "20px",
                alignItems: "center",
                width: "50px",
                border: "solid",
                borderColor: "white",
                borderRadius: 5,
                height: "50px",
                backgroundColor: "white",
              }}
            >
              <img src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"></img>
            </div>
          </div>
        </div>
      </div>
      <AutoSwipe />
    </div>
  );
};

export default ChooseHexanode;
