import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth/'
import HomeContent from '../../components/HomeContent/HomeContent'
import Form from '../../components/Form/Form'
import CreatedBy from '../../components/TeamModal/CreatedBy'

const HomeView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <>
      {!isLoggedIn && (
        <div>
          <HomeContent />
          <Form />
          <CreatedBy />
        </div>
      )}
    </>
  )
}

export default HomeView
