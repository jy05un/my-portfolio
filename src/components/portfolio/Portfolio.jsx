import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "War Game Analysis",
    source: "Blog",
    link: "https://blog.naver.com/jys000305",
  },
  {
    id: 2,
    image: IMG2,
    title: "Web Hacking Issue",
    source: "Blog",
    link: "https://blog.naver.com/jys000305",
  },
  {
    id: 3,
    image: IMG3,
    title: "TBomb",
    source: "Github",
    link: "https://github.com/jy05un/TBomb-JS",
  },
  {
    id: 4,
    image: IMG4,
    title: "AI Puppy Test",
    source: "Github",
    link: "https://github.com/jy05un/puppytest",
    demo: "https://puppytest.netlify.app/",
    site: "Web Site",
  },
  {
    id: 5,
    image: IMG5,
    title: "System Hacking Issue",
    source: "Blog",
    link: "https://blog.naver.com/jys000305",
  },
  {
    id: 6,
    image: IMG6,
    title: "MBTI Test",
    source: "Github",
    link: "https://github.com/jy05un/koongya-test",
    demo: "https://koongya-test.netlify.app/",
    site: "Web Site",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, source, link, demo, site }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={link} className="btn" target="_blank">
                  {source}
                </a>
                {demo ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    {site}
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
