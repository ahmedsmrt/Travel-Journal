import React from 'react'
import data from './data'

export default function JournalPost() {
  return (
    <article>
        <img src={data[0].imageUrl} alt={data[0].title} />
        <div className="info">
            <div className="location">
                <img src="" alt="pin" />
                <h4>{data[0].location}</h4>
                <a href={data[0].googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2>{data[0].title}</h2>
            <h6>{`${data[0].startDate}-${data[0].endDate}`}</h6>
            <p>{data[0].description}</p>
        </div>
    </article>
  )
}
