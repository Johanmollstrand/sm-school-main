import React, { useState } from "react";
import { useForm } from "@formspree/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";

const Booking = () => {
  const [state, handleSubmit] = useForm("xqazpypl");
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isDateBooked = (date) => {
    return bookedDates.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded && selectedDate) {
      setBookedDates([...bookedDates, selectedDate]);
    }
  };

  return (
    <div className="booking-container">
      {state.succeeded ? (
        <div className="booking-message">
          <p>Thanks for your booking request! We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input id="fullName" type="text" name="fullName" required />
          </div>
          <div>
            <label htmlFor="personNumber">Person Number:</label>
            <input id="personNumber" type="text" name="personNumber" required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input id="phone" type="tel" name="phone" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input id="address" type="text" name="address" required />
          </div>
          <div>
            <label htmlFor="placeToMeet">Place to Meet:</label>
            <input id="placeToMeet" type="text" name="placeToMeet" required />
          </div>
          <div>
            <label htmlFor="notice">Notice Message:</label>
            <textarea id="notice" name="notice"></textarea>
          </div>
          <div>
            <label htmlFor="date">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              filterDate={(date) => !isDateBooked(date)}
              minDate={new Date()}
              dateFormat="yyyy/MM/dd"
              required
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
