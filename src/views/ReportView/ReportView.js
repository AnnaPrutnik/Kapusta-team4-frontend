import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth'
import Report from '../../components/Report/Report'

const ReportView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      {isLoggedIn && (
        <div className="bg">
          <section className="container">
            <Report />
          </section>
        </div>
      )}
    </>
  )
}

export default ReportView
