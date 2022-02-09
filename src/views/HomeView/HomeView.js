import HomeContent from '../../components/HomeContent/HomeContent'
import Form from '../../components/Form/Form'
import { getExpenseCategory } from '../../services/categoryApi/categoryApi'

const HomeView = () => {
  return (
    <section className="home_section">
      <Form />
    </section>
  )
}

export default HomeView
