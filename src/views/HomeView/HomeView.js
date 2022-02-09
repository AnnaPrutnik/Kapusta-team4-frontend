import HomeContent from '../../components/HomeContent/HomeContent'
import Form from '../../components/Form/Form'
import { getExpenseCategory } from '../../services/categoryApi/categoryApi'

const HomeView = () => {
  const handleClick = async () => {
    console.log('click')
    const categories = await getExpenseCategory()
    console.log(categories)
  }
  return (
    <section className="home_section">
      <HomeContent />
      <button onClick={handleClick} type="button">
        Test axios
      </button>
      <Form />
    </section>
  )
}

export default HomeView
