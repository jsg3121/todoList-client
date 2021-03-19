import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import bootstrapPlugin from '@fullcalendar/bootstrap';

const Calendar = () => {

  const disabledClick = (info: any) => {
    if (info.event.url) {
      return;
    }
  };

  return (
    <div className="container-calendar">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin, bootstrapPlugin]}
        initialView="dayGridMonth"
        events={{
          googleCalendarApiKey: "AIzaSyBW8I1zj-ZgGZmFoDR7dOPbDs9y5M8CRiE",
          googleCalendarId: "ko.south_korea#holiday@group.v.calendar.google.com",
          overlap: false
        }}
        navLinks={false}
        locale={"en"}
        headerToolbar={{
          left: "",
          center: "title",
          right: ""
        }}
        dayHeaderClassNames={"week-text"}
        dayCellClassNames={"day-text"}
        contentHeight={"35rem"}
        eventMouseEnter={disabledClick}
      />
    </div>
  );
};

export default Calendar;