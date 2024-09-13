import React from "react";
import ContentCards from "../homecards";
import FilterDetail from "../filterDetail";
import { Col, Row } from "antd";

const HomeContent = ({ filterOpen, setFilterOpen }) => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={0} md={0} lg={6} xl={6} xxl={6}>
        <FilterDetail filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
      </Col>

      <Col xs={24} md={24} lg={18} xl={18} xxl={18} span={18}>
        <ContentCards />
      </Col>
    </Row>
  );
};

export default HomeContent;
