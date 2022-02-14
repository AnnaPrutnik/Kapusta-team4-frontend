import React from 'react';
import DatePicker from 'react-datepicker';
import s from '../Budget.module.scss';
import { CalendarSVG } from '../../../images/Budget/svg/svg';
//
// const CalendarContainer = ({ className, children }) => {
//   return (
//     <div style={{ padding: '16px', background: '#ff751d', color: '#fff', borderRadius: '16px' }}>
//       <calendar className={className}>
//         <div style={{ position: 'relative' }}>{children}</div>
//       </calendar>
//     </div>
//   );
// };

const CalendarDataPicker = ({ dataIT, dateFunc }) => {
  return (
    (<div className={s.date}>
      <CalendarSVG />
      <DatePicker dateFormat='dd/MM/yyy' selected={dataIT}
                  onChange={(date) => dateFunc(date)} />
    </div>)
  );
};

export default CalendarDataPicker;