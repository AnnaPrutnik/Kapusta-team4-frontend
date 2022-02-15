import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth/'
import HomeContent from '../../components/Home/HomeContent'
import Auth from '../../components/Auth/Auth'
import CreatedBy from '../../components/TeamModal/CreatedBy'

const HomeView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      {!isLoggedIn && (
        <div>
          <HomeContent />
          <Auth />
          <CreatedBy />
        </div>
      )}
    </>
  )
}

export default HomeView
