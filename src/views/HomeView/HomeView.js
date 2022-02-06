import HomeContent from '../../components/HomeContent/HomeContent';
import GreyBg from '../../components/GreyBg/GreyBg';
import WhiteBg from '../../components/WhiteBg/WhiteBg';
import IconsBg from '../../components/IconsBg/IconsBg';
import SmallBgIcons from '../../components/SmallBgIcons/SmallBgIcons';
import LoginForm from '../../components/LoginForm/LoginForm';

const HomeView = () => {
  return (
    <section className="home_section">
      <GreyBg>
        <HomeContent />
        <IconsBg />
      </GreyBg>

      <WhiteBg>
        <SmallBgIcons />
      </WhiteBg>
      <LoginForm />
    </section>
  );
}

export default HomeView;