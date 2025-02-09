import { achevmentList } from "../../commons";
import "./Achevment.css";
import Cards from "./components/Cards";

const Achevment = () => {
  return (
    <div className="custom-bg custom-padding">
      <div className="custom-width custom-max-width custom-margin">
        <div className="custom-flex-container">
          {achevmentList.map((ele) => {
            return (
              <Cards
                link={ele.link}
                des={ele.des}
                width={ele.width}
                height={ele.height}
                img={ele.img}
                showSplit={ele.showSplit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achevment;
