"use client";
import { useEffect, useState } from "react";
import { momentLocalizer } from "react-big-calendar";

import Modal from "@/components/Modal";
import moment from "moment";
import CustomCalender from "./_components/CustomCalender";
import ImageUpload from "./_components/ImageUploadWrapper";

const localizer = momentLocalizer(moment);

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const currentTime = moment();

  const data = [
    {
      start: "2024-05-30T23:15:00.000Z",
      end: "2024-05-31T00:15:00.000Z",
    },
    {
      start: "2024-05-31T05:45:00.000Z",
      end: "2024-05-31T06:45:00.000Z",
    },
  ];
  useEffect(() => {
    console.log("cc=", currentTime.toDate());
    data.forEach((item) => {
      const startTime = moment(item.start);
      const endTime = moment(item.end);
      console.log(moment(startTime).format("MMMM Do YYYY, h:mm:ss a"));
      console.log(moment(endTime).format("MMMM Do YYYY, h:mm:ss a"));

      if (currentTime.isBetween(startTime, endTime)) {
        console.log(`true`);
      } else {
        console.log("false");
      }
    });
  }, [data]);

  return (
    <div>
      <CustomCalender showModel={() => setShowModal(true)} />
      <Modal
        title="Connect to the facebook Page"
        onClose={() => setShowModal(false)}
        open={showModal}
        tone="danger"
        size="large"
        actions={{
          cancel: {
            label: "Cancel",
            action: () => setShowModal(false),
          },
        }}
      >
        <ImageUpload />
      </Modal>
    </div>
  );
};

export default App;
