import React from "react";
import "./Tv.css";
import Card from "../../components/searchroutelist/Card";


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

const Hero = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-text">
            <h1 className="title">Peacemaker</h1>
            <p className="desc">
              Peacemaker's freedom after Bloodsport is short-lived.  
              A new mission awaits, and the price of his liberty is high.
            </p>
            <button className="watch-btn">Watch Now</button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <h2 className="cards-title">Shows You Watched</h2>
      <section className="cards-container">
        
        {mockData.map((show, i) => (
            <div key={i}>
              <Card {...show} />
              {/* ✅ Watch Now Button */}
              <a
                href={show.link}
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Hero;
