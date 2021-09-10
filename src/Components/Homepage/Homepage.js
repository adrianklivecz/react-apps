import { Button, ButtonGroup } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="app-list">
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button className="list__item">
          <Link to="/weathered" className="item__link">
            <WbSunnyIcon className="item__icon" />
            <p>Weather App</p>
          </Link>
        </Button>
        <Button className="list__item">
          <Link to="/countdown-timer" className="item__link">
            <AccessAlarmIcon className="item__icon" />
            <p>Countdown App</p>
          </Link>
        </Button>
        <Button className="list__item disabled" disabled>
          <HourglassEmptyIcon className="item__icon" /> More coming soon...
        </Button>
      </ButtonGroup>
    </div>
  );
};
