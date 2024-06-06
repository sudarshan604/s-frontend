"use client";
import { useEffect, useState } from "react";
import { momentLocalizer } from "react-big-calendar";

import Modal from "@/components/shared/Modal";
import moment from "moment";
import CustomCalender from "./_components/CustomCalender";
import ImageUpload from "./_components/ImageUploadWrapper";

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
