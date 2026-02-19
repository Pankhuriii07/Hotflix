import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Card from "../../components/searchroutelist/Card";

// ✅ Featured Movies Data
const featuredMovies = [
  {
    image: "https://i.ytimg.com/vi/1SkwTiG-o6Q/maxresdefault.jpg",
    title: "Housefull 4",
    description:
      "In 1419, love between three couples succumbed to an evil ploy! As history repeats, they reincarnate after six centuries, albeit with the wrong partners.",
    meta: "2019 • U/A 13+ • 2h 15m • Hindi",
    tags: ["Comedy", "Slapstick", "Revenge", "Gangster"],
    link: "https://www.hotstar.com/in/movies/stree/1000223587/watch",
  },
  {
    image: "https://i.ytimg.com/vi/Z1BCujX3pw8/maxresdefault.jpg",
    title: "Captain Marvel",
    description:
      "Carol Danvers becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war.",
    meta: "2019 • U/A 13+ • 2h 4m • English",
    tags: ["Action", "Sci-Fi", "Marvel"],
    link: "https://www.hotstar.com/in/movies/captain-marvel/1260014878/watch?search_query=captain",
  },
  {
    image: "https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg",
    title: "The Dark Knight",
    description:
      "Batman raises the stakes in his war on crime. With the help of allies, he sets out to dismantle remaining criminal organizations.",
    meta: "2008 • U/A 16+ • 2h 32m • English",
    tags: ["Action", "Thriller", "DC"],
    link: "https://www.hotstar.com/in/movies/the-dark-knight/1971000395/watch?search_query=the+dark",
  },
];

// ✅ Mock Data (cards ke liye)
const mockData = [
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1434/1748996681434-v",
    title: "Anupama",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! Can she navigate modern-day parenting and relationships?",
    link: "https://www.hotstar.com/in/shows/anupama/1260022017",
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7250/1754473677250-v",
    title: "Ku ki saas Bhi kabhi bahu thi",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
    link: "https://www.hotstar.com/in/shows/kyunki-saas-bhi-kabhi-bahu-thi/655/kyunki-saas-bhi-kabhi-bahu-thi/1700078893/watch?search_query=kyu%2Bki%2Bsaas"
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! Can she navigate modern-day parenting and relationships?",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2010/1737370412010-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! Can she navigate modern-day parenting and relationships?",
    link: "https://www.hotstar.com/in/movies/f9-the-fast-saga/1971001465/watch",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/722/1734341890722-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! Can she navigate modern-day parenting and relationships?",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/722/1734341890722-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! Can she navigate modern-day parenting and relationships?",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1434/1748996681434-v",
    title: "Anupama",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn ",
    link: "https://www.hotstar.com/in/shows/anupama/1260022017",
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7250/1754473677250-v",
    title: "Ku ki saas Bhi kabhi bahu thi",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
    link: "https://www.hotstar.com/in/shows/kyunki-saas-bhi-kabhi-bahu-thi/655/kyunki-saas-bhi-kabhi-bahu-thi/1700078893/watch?search_query=kyu%2Bki%2Bsaas"
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! ?",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2010/1737370412010-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch!",
    link: "https://www.hotstar.com/in/movies/f9-the-fast-saga/1971001465/watch",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/722/1734341890722-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! ",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1434/1748996681434-v",
    title: "Anupama",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn ",
    link: "https://www.hotstar.com/in/shows/anupama/1260022017",
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7250/1754473677250-v",
    title: "Ku ki saas Bhi kabhi bahu thi",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
    link: "https://www.hotstar.com/in/shows/kyunki-saas-bhi-kabhi-bahu-thi/655/kyunki-saas-bhi-kabhi-bahu-thi/1700078893/watch?search_query=kyu%2Bki%2Bsaas"
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! ?",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2010/1737370412010-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch!",
    link: "https://www.hotstar.com/in/movies/f9-the-fast-saga/1971001465/watch",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/722/1734341890722-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! ",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1434/1748996681434-v",
    title: "Anupama",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn ",
    link: "https://www.hotstar.com/in/shows/anupama/1260022017",
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7250/1754473677250-v",
    title: "Ku ki saas Bhi kabhi bahu thi",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
    link: "https://www.hotstar.com/in/shows/kyunki-saas-bhi-kabhi-bahu-thi/655/kyunki-saas-bhi-kabhi-bahu-thi/1700078893/watch?search_query=kyu%2Bki%2Bsaas"
  },
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! ?",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2010/1737370412010-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch!",
    link: "https://www.hotstar.com/in/movies/f9-the-fast-saga/1971001465/watch",
  },
  ,
  {
    image:
      "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/722/1734341890722-v",
    title: "Jolly LLB",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description:
      "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! ",
    link: "https://www.hotstar.com/in/tv/kyunki-saas/1000010027",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto change movie after 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentMovie = featuredMovies[currentIndex];

  return (
    <div className="homepage">
      {/* 🔹 TOP BANNER */}
      <section className="top-banner">
        <img
          src="/BigB.jpg"
          alt="Bigg Boss Poster"
          className="banner-img"
        />
        <div className="banner-info">
          <h2>Bigg Boss S19</h2>
          <p>Gharwalon ki sarkaar takes charge in the wildest Bigg Boss yet.</p>
          <button className="btn">Trailer</button>
        </div>
      </section>

      {/* 🔹 FEATURED VIDEO (AUTO SLIDER) */}
      <section
        className="featured-video"
        style={{
          backgroundImage: `url(${currentMovie.image})`,
        }}
      >
        <div className="overlay"></div>
        <div className="featured-content">
          <h2>{currentMovie.title}</h2>
          <p>{currentMovie.description}</p>
          <p className="meta">{currentMovie.meta}</p>

          <div className="tags">
            {currentMovie.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>

          <a
            href={currentMovie.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Watch Now</button>
          </a>
        </div>
      </section>

      {/* 🔹 CARDS SECTION */}
      <section className="cards-section">
        <h2>Latest Releases</h2>
        <div className="cards-grid">
          {mockData.map((show, i) => (
            <div key={i} className="card">
              <Card {...show} />
              {/* ✅ Watch Now Button */}
              <a
                href={show.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn watch-btn">Watch Now</button>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
