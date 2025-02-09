import { useRef, useState, useEffect } from "react";
import "./App.css";
import CustomButton from "./component/CustomButton/CustomButton";
import Achevment from "./Sections/Achevment/Achevment";
import AdditonalBenefits from "./Sections/AdditonalBenefits/AdditonalBenefits";
import ChooseHexanode from "./Sections/ChooseHexanode/ChooseHexanode";
import DemoSection from "./Sections/DemoSection/DemoSection";
import Modes from "./Sections/Modes/Modes";
import PlatSupport from "./Sections/PlatSupport/PlatSupport";
import SignTry from "./Sections/SignTry/SignTry";
import menu from "../src/assets/menu-bar.png";

function App() {
  const [Scrolled, setScrolled] = useState<Boolean>(false);
  const [smallScreen, setSmallScreen] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="main-div">
      <head>
        <link
          rel="icon"
          href="https://static.hexnode.com/v2/assets/img/hexnode_icons/apple-touch-icon.png"
        />
        <title>Try Hexnode Kiosk free for 14 days!</title>
      </head>
      <header
        className="nav-header"
        style={{
          alignContent: "center",
          backgroundColor: Scrolled ? "white" : "#020a19",
          border: Scrolled && "#dbd9d2",
          borderStyle: Scrolled && "solid",
          borderTopWidth: Scrolled && "0px",
          borderRightWidth: Scrolled && "0px",
          borderLeftWidth: Scrolled && "0px",
          borderBottomWidth: Scrolled && "0.1px",
        }}
      >
        <div className="footer-div">
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                fontSize: "35px",
                fontFamily: "sans-serif",
                fontWeight: "bolder",
                color: Scrolled ? "black" : "white",
              }}
            >
              hexnode
            </div>
            {smallScreen ? (
              <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                <img style={{ height: "40px", width: "40px" }} src={menu}></img>
              </a>
            ) : (
              <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                <CustomButton title={"14 Days Free Trial"} height={""} />
              </a>
            )}
          </div>
        </div>
      </header>
      <div
        id="scrollableDiv"
        className="main-body"
        onScroll={() => setScrolled(true)}
      >
        <DemoSection smallScreen={smallScreen} />
        <Achevment />
        <Modes smallScreen={smallScreen} />
        <AdditonalBenefits smallScreen={smallScreen} />
        <ChooseHexanode smallScreen={smallScreen} />
        <PlatSupport />
        <SignTry smallScreen={smallScreen} />
        <footer>
          <nav>
            <div className="footer-element">
              <div className="footer-div">
                <div className="footer-container">
                  <div className="footer-content">
                    <div className="footer-links">
                      <ul className="footer-links-list">
                        <li className="footer-link-item">
                          <a
                            className="footer-link"
                            role="link"
                            href="https://www.hexnode.com/legal/terms-of-use/"
                          >
                            Terms of Use
                          </a>
                        </li>
                        <li className="footer-link-item">
                          <a
                            className="footer-link"
                            role="link"
                            href="https://www.hexnode.com/legal/privacy-policy/"
                          >
                            Privacy
                          </a>
                        </li>
                        <li className="footer-link-item">
                          <a
                            className="footer-link"
                            role="link"
                            href="https://www.hexnode.com/legal/cookies-policy/"
                          >
                            Cookies
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="footer-copy">
                      <p className="footer-text">
                        Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default App;
