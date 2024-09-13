import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import {
  OrderedListOutlined,
  SearchOutlined,
  GlobalOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import HomeContent from "./contentSection";

const HomeContainer = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  return (
    <section className="home-container">
      <section className="top-heading-section">
        <section className="heading-left-section">
          <div className="heading-text">Ferry operators</div>
          <div className="heading-description-text">
            Discover the 57 ferry operators we work with
          </div>
          <section className="filter-search-container">
            <Button
              icon={<OrderedListOutlined />}
              onClick={() => setFilterOpen(true)}
            >
              Filters
            </Button>
            <Select
              className="select-button"
              bordered={false}
              placeholder={
                <>
                  <UnorderedListOutlined /> Sort by: Reviews number (high first)
                </>
              }
            ></Select>
            <Input prefix={<SearchOutlined />} placeholder="Seacrh" />
          </section>
        </section>
        <section className="heading-right-section">
          <Button className="book-your-ticket" icon={<RightOutlined />}>
            Book your tickets
          </Button>
          <Button className="live-map-view" icon={<GlobalOutlined />}>
            Live Map View
          </Button>
        </section>
      </section>
      <HomeContent filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
    </section>
  );
};

export default HomeContainer;
