import React from 'react'
import image from '../../assets/news-image.webp'

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ maxWidth: "345px" }}>
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled News"}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Stay informed with Daily Read – your trusted source for breaking news, analysis, and real-time updates."}
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
