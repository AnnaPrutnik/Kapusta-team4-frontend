import { ReactComponent as ReportBtnIcon } from './ReportBtnIcon.svg';
import s from './ReportBtn.module.scss';

const ReportBtn = () => {
  return (
    <button type="button" className={s.ReportBtn}>
      Перейти к отчетам
      <div className={s.Icon}>
        <ReportBtnIcon />
      </div>
    </button>
  );
};

export default ReportBtn;
