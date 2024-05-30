"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "@/components/Modal";
import ImageUpload from "./_components/ImageUploadWrapper";
import usePostSchedule from "@/state-management/facebook/postSheduleStore";

const localizer = momentLocalizer(moment);

const App = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [selectEvent, setSelectEvent] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const shedule = usePostSchedule();

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null);
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
    setImageURL(event.imgUrl || ""); // Set the image URL if it exists
  };

  const saveEvent = () => {
    if (eventTitle && selectedDate) {
      const imgUrl = shedule.schedule.imgUrl; // Get the image URL from the schedule store
      if (selectEvent) {
        const updatedEvent = { ...selectEvent, title: eventTitle, imgUrl };
        const updatedEvents = events.map((event) =>
          event === selectEvent ? updatedEvent : event
        );
        setEvents(updatedEvents);
      } else {
        const newEvent = {
          title: eventTitle,
          start: selectedDate,
          end: moment(selectedDate).add(1, "hours").toDate(),
          imgUrl,
        };
        setEvents([...events, newEvent]);
      }
      setShowModal(false);
      setEventTitle("");
      setSelectEvent(null);
      setImageURL("");
    }
  };

  const deleteEvents = () => {
    if (selectEvent) {
      const updatedEvents = events.filter((event) => event !== selectEvent);
      setEvents(updatedEvents);
      setShowModal(false);
      setEventTitle("");
      setSelectEvent(null);
      setImageURL("");
    }
  };

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectedEvent}
      />

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
        {/* <h1> {selectEvent ? "Edit Event" : "Add Event"}</h1>
        <div className="modal-body">
          <label htmlFor="eventTitle" className="form-label">
            Event Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="eventTitle"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        {selectEvent && (
          <button
            type="button"
            className="btn btn-danger me-2"
            onClick={deleteEvents}
          >
            Delete Events
          </button>
        )}

      */}
        <button type="button" className="btn btn-primary" onClick={saveEvent}>
          Save
        </button>
      </Modal>
    </div>
  );
};

export default App;
