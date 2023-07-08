import React, { useState } from 'react';

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

function CalendarComponent() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        className='react-calendar'
        onChange={onChange}
        value={value} />
    </div>
  );
}

export default CalendarComponent