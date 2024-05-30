import { create } from "zustand";

interface Schedule {
  status: string;
  imgUrl: string;
  scheduleTime: string;
}

interface PageInterface {
  schedule: Schedule;
  setScheduleData: (
    status?: string,
    imgUrl?: string,
    scheduleTime?: string
  ) => void;
}

const usePostSchedule = create<PageInterface>((set) => ({
  schedule: {
    status: "",
    imgUrl: "",
    scheduleTime: "",
  },
  setScheduleData: (status?: string, imgUrl?: string, scheduleTime?: string) =>
    set((state) => ({
      schedule: {
        status: status !== undefined ? status : state.schedule.status,
        imgUrl: imgUrl !== undefined ? imgUrl : state.schedule.imgUrl,
        scheduleTime:
          scheduleTime !== undefined
            ? scheduleTime
            : state.schedule.scheduleTime,
      },
    })),
}));

export default usePostSchedule;
