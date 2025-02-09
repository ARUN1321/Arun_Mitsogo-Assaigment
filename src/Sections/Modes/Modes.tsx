import { useEffect, useState } from "react";
import { modes } from "../../commons";
import "./Modes.css";
import CustomButton from "../../component/CustomButton/CustomButton";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Modes = ({ smallScreen }: any) => {
  const [display, setDisplay] = useState<any>(modes[0]);

  const onclick = (tabDisplay: any) => {
    setDisplay(tabDisplay);
  };

  return (
    <div className="modes-class">
      <div className="modes-container">
        <h2 className="custom-text" style={{ marginBottom: "50px" }}>
          Specific kiosk modes for unique use cases
        </h2>
        {smallScreen ? (
          <Accordion>
            {modes.map((ele) => {
              return (
                <AccordionItem header={<div className="modeHeaderelement">{ele.tab}</div>}>
                  <div
                    className="displayelement"
                    style={{ flexDirection: "column-reverse" }}
                  >
                    <div className="infoelement">
                      <h3 className="titleelement">{ele.title}</h3>
                      <ul
                        style={{
                          display: "block",
                          listStyle: "none",
                          paddingLeft: "0px",
                        }}
                      >
                        {ele?.subInfo.map((ele: string) => {
                          return (
                            <li className="subelement">
                              <span className="tickelement">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14.393"
                                  height="10.111"
                                >
                                  <path
                                    fill="none"
                                    stroke="#60c458"
                                    stroke-width="2"
                                    d="M.697 4.107 5.45 8.718l8.247-8"
                                    data-name="tick - icon"
                                  ></path>
                                </svg>
                              </span>
                              <p className="paraelement">{ele}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="imgelement" style={{position: 'relative'}}>
                      <div className="imgStyleelement">
                        <figure className="figureelement">
                          <img
                            loading="lazy"
                            width={570}
                            height={387}
                            srcSet={`${ele.img} 1x, ${ele.img} 2x`}
                            src={ele.img}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {modes.map((ele) => {
                return (
                  <div onClick={() => onclick(ele)}>
                    <CustomButton
                      nolink={true}
                      title={ele.tab}
                      height={"50px"}
                      fontSize={"22px"}
                    />
                  </div>
                );
              })}
            </div>
            <div>
              {display && (
                <div className="displayelement">
                  <div className="infoelement">
                    <h3 className="titleelement">{display.title}</h3>
                    <ul
                      style={{
                        display: "block",
                        listStyle: "none",
                        paddingLeft: "0px",
                      }}
                    >
                      {display?.subInfo.map((ele: string) => {
                        return (
                          <li className="subelement">
                            <span className="tickelement">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.393"
                                height="10.111"
                              >
                                <path
                                  fill="none"
                                  stroke="#60c458"
                                  stroke-width="2"
                                  d="M.697 4.107 5.45 8.718l8.247-8"
                                  data-name="tick - icon"
                                ></path>
                              </svg>
                            </span>
                            <p className="paraelement">{ele}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="imgelement">
                    <div className="imgStyleelement">
                      <figure className="figureelement">
                        <img
                          className="img"
                          loading="lazy"
                          width={570}
                          height={387}
                          srcSet={`${display.img} 1x, ${display.img} 2x`}
                          src={display.img}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modes;
