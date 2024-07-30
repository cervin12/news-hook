import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"

export default function News() {
  const [news, setNews] = useState(null);
  const [query, setQuery] = useState("keyword");
  const [input, setInput] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=c9521e3c3ee74a62b28d5f9c1a0edd5d`
      )
      .then((res) => {
        const data = res.data.articles.filter(article=>article.source.name != '[Removed]')
        setNews([...data]);
        console.log(news);
      })
      .catch((e) => console.log(e.message));
  }, [query]);

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(input);
  }

  return (
    <div className="container mx-auto ">
      <header className="mb-10 text-center inset-x-0">
        <h1 className="text-white text-4xl font-bold">News App</h1>
        <form onSubmit={handleSubmit} className="input mt-10 flex gap-2 justify-center">
          <input
            onChange={handleChange}
            className=" py-2 px-4 rounded w-3/4"
            value={input}
            placeholder="enter a keyword"
            type="text"
          />
          <button className="bg-black text-white px-4 py-2 rounded-lg" type="submit">Search</button>
        </form>
      </header>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {news &&
          news.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              image={item.urlToImage == null ? `https://picsum.photos/200/300` : item.urlToImage }
              url={item.url}
            />
          ))}
      </div>
    </div>
  );
}
