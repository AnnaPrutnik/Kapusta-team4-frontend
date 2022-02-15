import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import s from '../../styles/component/Loader/Loader.module.scss'

function PreLoader() {
  return (
    <div className={s.wrap}>
      <Loader
        className={s.loader}
        type="Audio"
        color="#fb7c2f"
        height={100}
        width={100}
      />
    </div>
  )
}

export default PreLoader
