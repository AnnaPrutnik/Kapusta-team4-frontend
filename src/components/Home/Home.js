import background from "../../images/svg/background.svg";
import HomeContent from "../HomeContent/HomeContent";

export default function Home() {
  return (
    <section className="home_section">
      <div className='home_section_top_bg'>
         <HomeContent/>
        <svg className='home_section_top_icons'>
          <use className='home_section_icon' href={`${background}#top-background`}></use>
        </svg>
        <svg className='home_section_mobile_top_icon'>
          <use href={`${background}#top-background-mobile`}></use>
        </svg>
       
      </div>
      <div className='home_section_bottom_bg'>
        <svg className='home_section_bottom_icons'>
          <use href={`${background}#bottom-background`}></use>
        </svg>
        <svg className='home_section_mobile_bottom_icon'>
          <use href={`${background}#bottom-background-mobile`}></use>
        </svg>
      </div>
    </section>
  );
}
