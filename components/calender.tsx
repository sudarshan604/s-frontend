"use client";
import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  const components = {
    event: (props) => {
      console.log(props);
    },
  };

  return (
    <BigCalendar
      views={["month", "week", "day"]}
      components={components}
      {...props}
      onSelectSlot={(slotInfo) => {
        console.log(slotInfo);
      }}
      selectable
      localizer={localizer}
    />
  );
}
