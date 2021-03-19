import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import bootstrapPlugin from '@fullcalendar/bootstrap';

const Calendar = () => {
  return (
    <div className="container-calendar">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin, bootstrapPlugin]}
        googleCalendarApiKey="AIzaSyBW8I1zj-ZgGZmFoDR7dOPbDs9y5M8CRiE"
        initialView="dayGridMonth"
        events={{
          googleCalendarId: "ko.south_korea#holiday@group.v.calendar.google.com"
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
        contentHeight={"430px"}
      />
    </div>
  );
};

export default Calendar;