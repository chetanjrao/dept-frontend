import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Popular.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    name: "Steven Spielberg",
    sign: "/images/content/cup.svg",
    number: "1",
    color: "#3772FF",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVS2ee6usybjD-SvuXSvnWU2E3qf7-5g5YOTbUK71OHqtPVTY",
    reward: "/images/content/reward-1.svg"
  },
  {
    name: "Christopher Nolan",
    sign: "/images/content/donut.svg",
    number: "2",
    color: "#9757D7",
    avatar: "https://static.wikia.nocookie.net/chrisnolan/images/0/05/Christopher_Nolan.jpg",
    reward: "/images/content/reward-1.svg"
  },
  {
    name: "Quentin Tarantino",
    sign: "/images/content/lightning.svg",
    number: "3",
    color: "#45B26B",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlTrJvdxqSMBYf90USQe0qXEaMhXdy35FJOpUlEZ5PGl4wIBI",
    reward: "/images/content/reward-1.svg"
  },
  {
    name: "Martin Scorsese",
    sign: "/images/content/donut.svg",
    number: "4",
    color: "#23262F",
    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoWGssQF0snW7420BHTm7HB8IZ0nJNSeOXdoIi4bmrA-C0jT-J",
    reward: "/images/content/reward-1.svg"
  },
  {
    name: "James Cameron",
    sign: "/images/content/donut.svg",
    number: "5",
    color: "#777E90",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbZf9bzSjQhCZKXVuQYTNoIiAuiE2qsN8NWk5aTq6d1faV0su",
    reward: "/images/content/reward-1.svg"
  }
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);


const Popular = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.stage}>Popular</div>
            <div className={styles.substage}>Directors</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.item}>
                  <div className={styles.body}>
                    <div className={styles.avatar}>
                      <img src={x.avatar} alt="Avatar" />
                      <div className={styles.reward}>
                        <img src={x.reward} alt="Reward" />
                      </div>
                    </div>
                    <div className={styles.name}>{x.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
