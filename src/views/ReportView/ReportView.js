import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth'
import Report from '../../components/Report/Report'

const ReportView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      {isLoggedIn && (
        <div className="bg">
          <div className="wrapper">
            <section className="container">
              <Report />
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default ReportView
