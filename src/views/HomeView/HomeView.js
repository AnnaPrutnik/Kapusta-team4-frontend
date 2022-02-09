import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import HomeContent from '../../components/HomeContent/HomeContent'
import Form from '../../components/Form/Form'

const HomeView = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <section className="home_section">
      <HomeContent />
      { !isLoggedIn && <Form /> }
    </section>
  )
}

export default HomeView
