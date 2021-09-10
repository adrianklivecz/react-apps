import { TextField } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import React from "react";
import "./CountdownTimer.scss";

export const CountdownTimer = () => {
  return (
    <div className="countdown">
      <div className="countdown__title">
        <TimerIcon className="item__icon" />
        <p>Countdown Timer</p>
      </div>

      <form className="countdown__inputs">
        <TextField
          className="input-field"
          id="filled-basic"
          label="Event name"
          variant="filled"
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
        />
        <TextField
          className="input-field"
          id="time"
          label="Your event's time"
          type="time"
          defaultValue="00:00"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
};
