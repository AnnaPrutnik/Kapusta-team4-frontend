import s from './GreyBg.module.scss';

function GreyBg (props) {
  return <div className={s.grey_bg}>
           {props.children}
         </div>
  ;
}

export default GreyBg;