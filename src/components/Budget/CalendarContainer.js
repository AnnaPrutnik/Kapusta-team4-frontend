import React from 'react';
import * as calendar from 'react-datepicker';

const CalendarContainer = ({ className, children }) => {
  return (
    <div style={{ padding: '16px', background: '#ff751d', color: '#fff', borderRadius: '16px' }}>
      <calendar className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </calendar>
    </div>
  );
};

export default CalendarContainer;