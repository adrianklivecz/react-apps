import { Button, Card, TextField } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import React, { useEffect, useState } from "react";
import "./CountdownTimer.scss";

const daysToMs = 1000 * 60 * 60 * 24;
const hoursToMs = 1000 * 60 * 60;
const minutesToMs = 1000 * 60;

export const CountdownTimer = () => {
  const [eventData, setEventData] = useState({});
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [startCountdown, setStartCountdown] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    console.log("startCountdown", startCountdown);
    let t;
    if (!startCountdown) {
      setEventData({});
      setRemainingTime(null);
    } else if (eventData?.eventName) {
      t = setInterval(() => {
        const newEventDate = new Date(`${eventDate + eventTime}`).getTime();
        const presentTime = new Date().getTime();
        setRemainingTime(newEventDate - presentTime);

        setEventData({
          ...eventData,
          ...{
            remainingDays: Math.floor(remainingTime / daysToMs),
            remainingHours: Math.floor((remainingTime % daysToMs) / hoursToMs),
            remainingMinutes: Math.floor(
              (remainingTime % hoursToMs) / minutesToMs
            ),
            remainingSeconds: Math.floor((remainingTime % minutesToMs) / 1000),
            remainingTime,
          },
        });
      }, 500);
    } else {
      t = setInterval(() => {
        const newEventDate = new Date(`${eventDate + eventTime}`).getTime();
        const presentTime = new Date().getTime();
        setRemainingTime(newEventDate - presentTime);

        setEventData({
          eventName,
          remainingDays: Math.floor(remainingTime / daysToMs),
          remainingHours: Math.floor((remainingTime % daysToMs) / hoursToMs),
          remainingMinutes: Math.floor(
            (remainingTime % hoursToMs) / minutesToMs
          ),
          remainingSeconds: Math.floor((remainingTime % minutesToMs) / 1000),
          remainingTime,
        });
      }, 0);
    }

    return () => {
      if (t) {
        clearInterval(t);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingTime, startCountdown]);

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
          color={startCountdown ? "secondary" : "primary"}
          onClick={() =>
            eventName && eventDate ? setStartCountdown(!startCountdown) : null
          }
        >
          {startCountdown ? "Stop" : "Start"}
        </Button>
      </div>
      {eventData.remainingTime > 0 ? (
        <Card className="countdown__event">
          <p className="event-name">
            {eventData?.eventName?.toUpperCase()} Countdown:
          </p>
          <div className="event">
            <div className="event-details">
              <p className="time-left">{eventData?.remainingDays}</p>
              <p>days</p>
            </div>
            <div className="event-details">
              <p className="time-left">{eventData?.remainingHours}</p>
              <p>hours</p>
            </div>
            <div className="event-details">
              <p className="time-left">{eventData?.remainingMinutes}</p>
              <p>minutes</p>
            </div>
            <div className="event-details">
              <p className="time-left">{eventData?.remainingSeconds}</p>
              <p>seconds</p>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="countdown__event">
          <p className="event-name">Time's up!</p>
        </Card>
      )}
    </div>
  );
};
