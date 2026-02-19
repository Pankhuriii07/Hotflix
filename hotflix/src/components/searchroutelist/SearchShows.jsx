import React from "react";
import Card from "./Card";
import "./SearchShows.css";

const mockData = [
  {
    image: "	https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1434/1748996681434-v", // public folder se image
    title: "Kyunki Saas Bhi Kabhi Bahu Thi",
    year: "2025",
    language: "Hindi",
    channel: "StarPlus",
    rating: "U/A 13+",
    description: "Time flew by, yet Tulsi Virani stood strong as the Sarvagunn matriarch! Can she navigate modern-day parenting and relationships?",
  },
  {
    image: "https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7250/1754473677250-v",
    title: "Another Show",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
  },
  {
    image: "	https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/471/1738316010471-v",
    title: "Another Show",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
  },
  {
    image: "	https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9462/1746124599462-v",
    title: "Another Show",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
  },
  {
    image: "	https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7527/267527-v",
    title: "Another Show",
    year: "2024",
    language: "English",
    channel: "Netflix",
    rating: "U/A 16+",
    description: "An exciting story about survival and courage.",
  }, {
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

const SearchShows = () => {
  return (
    <div>
      <div className="textSearch">
        <h2>Trending Shows</h2>
      </div>
      <div className="cards-grid">
        {mockData.map((show, i) => (
          <Card key={i} {...show} />
        ))}
      </div>
    </div>
  );
};

export default SearchShows;
