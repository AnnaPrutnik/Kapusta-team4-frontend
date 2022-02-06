import title from "../../images/svg/title.svg";

function HomeContent() {
  return (
    <div className="home_content">
      <div className="home_content_titles">
        <svg className="home_title">
          <use className="home_title_icon" href={`${title}#icon-title`}></use>
        </svg>
        <svg className="home_title_mobile">
          <use
            className="home_title_icon"
            href={`${title}#icon-mobile-title`}
          ></use>
        </svg>
        <p className="home_tag">Smart Finance</p>
      </div>
      {/* форма логина/регистрации */}
    </div>
  );
}

export default HomeContent;
