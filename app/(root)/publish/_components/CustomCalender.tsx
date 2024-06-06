"use client";
import { useCallback, useEffect, useState } from "react";
import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";

import {
  SheduleInterface,
  useFileUpload,
  useGetShedulePost,
} from "@/hooks/platform";
import usePostSchedule from "@/state-management/facebook/postSheduleStore";
import moment from "moment";
import PostEvent from "./PostEvent";

const localizer = momentLocalizer(moment);

const CustomCalender = ({ showModel }: { showModel: () => void }) => {
  const [events, setEvents] = useState<SheduleInterface[]>([]);
  const { data } = useGetShedulePost();
  const { mutate } = useFileUpload();
  const shedule = usePostSchedule();

  const handleSelectSlot = (slotInfo: { start: Date }) => {
    console.log(slotInfo);
    showModel();
    shedule.setScheduleDate({
      start: slotInfo.start as Date,
    });
  };

  useEffect(() => {
    const currentDate = moment();
    if (data) {
      const newdata = data.reduce(
        (acc: SheduleInterface[], currentMedia: SheduleInterface) => {
          const new1 = moment(currentMedia.start).toDate();
          const new2 = moment(currentMedia.end).toDate();

          const { start, end, ...rest } = currentMedia;

          acc.push({ start: new1, end: new2, ...rest });
          return acc;
        },
        []
      );
      setEvents(newdata);
    }
  }, [data]);

  useEffect(() => {
    if (shedule.schedule.uploadFile[0]?.data_url) {
      mutate({ file: shedule.schedule.uploadFile[0].data_url });
      shedule.setScheduleData({ uploadFile: [] });
    }
  }, [shedule.schedule]);

  const [view, setView] = useState<View>(Views.MONTH);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const components = {
    event: ({ event }) => {
      const arrayEntries = Object.entries(event)
        .filter(([key, value]) => Array.isArray(value))
        .map(([key, value]) => ({ key, value }));

      return <PostEvent data={arrayEntries} />;
    },
  };

  const [date, setDate] = useState(new Date());
  const onNavigate = useCallback(
    (newDate: Date) => {
      return setDate(newDate);
    },
    [setDate]
  );

  return (
    <div className="h-[800px]">
      <Calendar
        localizer={localizer}
        events={events}
        date={date}
        components={components}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        // onSelectEvent={handleSelectedEvent}
        view={view}
        defaultView={Views.MONTH}
        showMultiDayTimes
        onNavigate={onNavigate}
        views={["month", "week", "day"]}
        onView={handleOnChangeView}
      />
    </div>
  );
};

export default CustomCalender;
