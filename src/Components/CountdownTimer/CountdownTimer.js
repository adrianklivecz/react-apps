import { Button, Card, TextField } from "@material-ui/core";
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
  const [remainingDays, setRemainingDays] = useState(null);
  const [remainingHours, setRemainingHours] = useState(null);
  const [remainingMinutes, setRemainingMinutes] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setNewEventDate(new Date(`${eventDate + eventTime}`).getTime());
      setPresentTime(new Date().getTime());
      setRemainingTime(newEventDate - presentTime);
      setRemainingDays(Math.floor(remainingTime / daysToMs));
      setRemainingHours(Math.floor((remainingTime % daysToMs) / hoursToMs));
      setRemainingMinutes(
        Math.floor((remainingTime % hoursToMs) / minutesToMs)
      );
      setRemainingSeconds(Math.floor((remainingTime % minutesToMs) / 1000));
    }, 1000);

    return () => {
      setStartCountdown(false);
      clearInterval(t);
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
      <div className="countdown__inputs">
        <form className="inputs">
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
      {remainingTime ? (
        <Card className="countdown__event">
          <p className="event-name">{eventName.toUpperCase()} Countdown:</p>
          <div className="event">
            <div class="event-details">
              <p class="time-left">{remainingDays} </p>
              <p>days</p>
            </div>
            <div class="event-details">
              <p class="time-left">{remainingHours}</p>
              <p>hours</p>
            </div>
            <div class="event-details">
              <p class="time-left">{remainingMinutes}</p>
              <p>minutes</p>
            </div>
            <div class="event-details">
              <p class="time-left">{remainingSeconds}</p>
              <p>seconds</p>
            </div>
          </div>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};
