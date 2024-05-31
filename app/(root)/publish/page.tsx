"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import Modal from "@/components/Modal";
import ImageUpload from "./_components/ImageUploadWrapper";
import usePostSchedule from "@/state-management/facebook/postSheduleStore";
import Image from "next/image";
import { useFileUpload, useGetShedulePost } from "@/hooks/platform";
import CustomCalender from "./_components/CustomCalender";

const localizer = momentLocalizer(moment);

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

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
