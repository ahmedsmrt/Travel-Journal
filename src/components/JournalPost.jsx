import React from "react";
import data from "./data";

export default function JournalPost(props) {
  return (
    <>
      <article>
        <img src={props.imageUrl} alt={props.title} />
        <div className="info">
          <div className="location">
            <img
              src="https://raw.githubusercontent.com/ahmedsmrt/Travel-Journal/6ae2b359aae2d030ea45d92907e7021e39ee2122/src/assets/pin.svg"
              alt="pin"
            />
            <h4>{props.location}</h4>
            <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h2>{props.title}</h2>
          <h6>{`${props.startDate}-${props.endDate}`}</h6>
          <p>{props.description}</p>
        </div>
      </article>
    </>
  );
}
