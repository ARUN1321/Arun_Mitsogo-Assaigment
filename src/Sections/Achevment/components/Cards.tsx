import "./achevCards.css";

interface IProps {
  link: string;
  des: string;
  img: string;
  showSplit: boolean;
  width: number;
  height: number;
}

const Cards = ({ link, des, img, showSplit, width, height }: IProps) => {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="group banner-accolades-wrap"
        href={link}
      >
        <div className="banner-accolades-content">
          <div className="banner-accolades-img-wrap">
            <div className="banner-accolades-img">
              <img
                alt="IDC"
                loading="lazy"
                width={width}
                height={height}
                decoding="async"
                className="banner-accolades-img-element"
                srcSet={`${img} 1x, ${img} 2x`}
                src={img}
              />
            </div>
          </div>
          <div>
            <p className="banner-accolades-text">{des}</p>
          </div>
        </div>
      </a>
      {showSplit && <div className="custom-class" />}
    </>
  );
};

export default Cards;
