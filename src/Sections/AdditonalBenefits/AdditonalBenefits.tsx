import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { images, modes } from "../../commons";
import CustomButton from "../../component/CustomButton/CustomButton";
import "./AdditonalBenefits.css";
import { useState } from "react";

const AdditonalBenefits = ({ smallScreen }: any) => {
  const [img, setimg] = useState<any>(images[0].img);
  const updateImg = (img: any) => {
    setimg(img);
  };
  return (
    <div className="benefit-padding">
      <div className="benefit-container">
        <h2 className="benefit-text">
          What additional possibilities does the Kiosk mode offer?
        </h2>
        {smallScreen ? (
          <Accordion>
            {images.map((ele, index) => {
              return (
                <AccordionItem
                  initialEntered={index === 0}
                  header={<div className="modeHeaderelement">{ele.title}</div>}
                >
                  <div
                    className="displayelement"
                    style={{ flexDirection: "column-reverse" }}
                  >
                    <div className="infoelement">
                      <h3 className="titleelement">{ele.title}</h3>
                      <p
                        style={{
                          display: "block",
                          listStyle: "none",
                          paddingLeft: "0px",
                        }}
                      >
                        {ele.des}
                      </p>
                      <a
                        href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                        className="try-for-free"
                        target="_blank"
                        rel="noreferrer"
                        style={{alignSelf: 'start'}}
                      >
                        <span className="try-for-free-text">Try for free</span>
                        <div className="arrow-container">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6.575"
                            height="11.737"
                            className="arrow-icon"
                          >
                            <path
                              fill="none"
                              stroke="#dd0735"
                              strokeLinecap="round"
                              d="m.707.707 5.161 5.161-5.161 5.161"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="imgelement">
                      <div className="imgStyleelement">
                        <figure className="figureelement">
                          <img
                            className="img"
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
          <div
            id={"mode"}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {img && <img loading="lazy" width={420} height={420} src={img} />}
            <Accordion>
              {images.map((ele, index) => {
                return (
                  <>
                    <AccordionItem
                      header={
                        <div
                          className="modeHeaderelement"
                          style={{ width: "600px" }}
                          onClick={() => updateImg(ele.img)}
                        >
                          {ele.title}
                        </div>
                      }
                      initialEntered={index === 0}
                    >
                      <div
                        className="displayelement"
                        style={{
                          flexDirection: "column-reverse",
                          padding: "10px",
                          width: "615px",
                        }}
                      >
                        <div className="infoelement" style={{ padding: 0 }}>
                          <p
                            style={{
                              display: "block",
                              listStyle: "none",
                              fontSize: "18px",
                              paddingLeft: "0px",
                            }}
                          >
                            {ele.des}
                          </p>
                          <a
                            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                            className="try-for-free"
                            target="_blank"
                            rel="noreferrer"
                            style={{alignSelf: 'start'}}
                          >
                            <span className="try-for-free-text">
                              Try for free
                            </span>
                            <div className="arrow-container">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.575"
                                height="11.737"
                                className="arrow-icon"
                              >
                                <path
                                  fill="none"
                                  stroke="#dd0735"
                                  strokeLinecap="round"
                                  d="m.707.707 5.161 5.161-5.161 5.161"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditonalBenefits;
