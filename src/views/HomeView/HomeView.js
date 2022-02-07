import HomeContent from '../../components/HomeContent/HomeContent'
import { GreyBg } from '../../components/Background/'
import { WhiteBg } from '../../components/Background/'
import { IconsBg } from '../../components/Background/'
import { SmallBgIcons } from '../../components/Background/'
import Form from '../../components/Form/Form'

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
      <Form />
    </section>
  )
}

export default HomeView
