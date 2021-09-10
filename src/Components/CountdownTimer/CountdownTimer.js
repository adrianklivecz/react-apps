import { Button, TextField } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import React, { useEffect, useState } from "react";
import "./CountdownTimer.scss";

const daysToMs = 1000 * 60 * 60 * 24;
const hoursToMs = 1000 * 60 * 60;
const minutesToMs = 1000 * 60;

export const CountdownTimer = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [startCountdown, setStartCountdown] = useState(false);
  const [newEventDate, setNewEventDate] = useState(null);
  const [presentTime, setPresentTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    if (startCountdown) {
      setPresentTime(new Date().getTime());
      setNewEventDate(new Date(`${eventDate + eventTime}`).getTime());
      setRemainingTime(Number(newEventDate) - Number(presentTime));
    }
    console.log("newEvent:", newEventDate, typeof newEventDate);
    console.log("presentTime:", presentTime);
    console.log("remainingTime:", remainingTime);

    return () => {
      setStartCountdown(false);
    };
  }, [
    eventDate,
    eventTime,
    newEventDate,
    presentTime,
    remainingTime,
    startCountdown,
  ]);

  return (
    <div className="countdown">
      <div className="countdown__title">
        <TimerIcon className="item__icon" />
        <p>Countdown Timer</p>
      </div>
      <div className="test">
        <form className="countdown__inputs">
          <TextField
            className="input-field"
            id="filled-basic"
            label="Event name"
            variant="filled"
            onChange={(e) => setEventName(e.target.value)}
          />
          <TextField
            className="input-field"
            id="date"
            label="Your event's date"
            type="date"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <TextField
            className="input-field"
            id="time"
            label="Your event's time *optional*"
            type="time"
            defaultValue="00:00"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) =>
              e.target.value ? setEventTime(`T${e.target.value}:00`) : null
            }
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            eventName && eventDate ? setStartCountdown(true) : null
          }
        >
          Start
        </Button>
      </div>
    </div>
  );
};
