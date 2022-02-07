import s from './WhiteBg.module.scss';

const WhiteBg = (props) => {
  return <div className={s.white_bg}>
           {props.children}
         </div>
  ;
}

export default WhiteBg;