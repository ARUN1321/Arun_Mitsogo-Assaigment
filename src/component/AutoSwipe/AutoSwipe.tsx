import { companies } from "../../commons";
import "./AutoSwipe.css";

const AutoSwipe = () => {
  return (
    <div className="wrapper">
      {/* {companies.map((ele, index) => {
        return ( */}
      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 1) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[0]}
            />
          </figure>
        </div>
      </div>
      
      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 2) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[1]}
            />
          </figure>
        </div>
      </div>

      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 3) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[2]}
            />
          </figure>
        </div>
      </div>

      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 4) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[3]}
            />
          </figure>
        </div>
      </div>

      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 5) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[4]}
            />
          </figure>
        </div>
      </div>

      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 6) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[5]}
            />
          </figure>
        </div>
      </div>

      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 7) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[6]}
            />
          </figure>
        </div>
      </div>

      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 8) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[7]}
            />
          </figure>
        </div>
      </div>

      <div
        className="item"
        style={{
          animationDelay: `calc(30s / ${companies.length} * (${companies.length} - 9) * -1)`,
        }}
      >
        {" "}
        <div>
          <figure
            tabIndex={-1}
            className="figure-class"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              alt="Gorillas"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={companies[8]}
            />
          </figure>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default AutoSwipe;
