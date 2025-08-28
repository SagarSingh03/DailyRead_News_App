import React, { useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem'

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles || []))
      .catch(error => console.error("Error fetching news:", error))
  }, [category])

  return (
    <div className="container my-3">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center text-muted">Loading news...</p>
        )}
      </div>
    </div>
  )
}

export default NewsBoard
