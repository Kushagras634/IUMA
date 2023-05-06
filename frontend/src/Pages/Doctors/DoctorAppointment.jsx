import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' 

const DoctorAppointment = () => {
  return (
    <>
      <div className='bg-white p-5 border'>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: 'Apointment 1 at 8:30am', date: '2023-05-01' },
            { title: 'Apointment2 at 5:40pm', date: '2023-05-17' }
          ]}
        />
    </div>
    </>
  )
}

export default DoctorAppointment