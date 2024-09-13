import React from "react";
import { HomeCardsData } from "../helperfunction";
import { Col, Row, Card, Carousel } from "antd";
import Image from "next/image";

const HomeCardsCarousel = () => {
  return (
    <>
      <Carousel autoplay={true} dots={false} className="card-carousel">
        {HomeCardsData.map((e) => {
          return (
            <Card className="home-search-book-cards-carousel">
              <div className="card-number">{e?.id}</div>
              <Image src={e?.image} alt="#" />
              <div className="card-title-text">{e?.title}</div>
            </Card>
          );
        })}
      </Carousel>
    </>
  );
};

export default HomeCardsCarousel;
