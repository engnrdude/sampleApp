import React from "react";
import { HomeCardsData } from "../helperfunction";
import { Col, Row, Card, Space, Rate, Divider, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import "./styles.scss"

const ContentCards = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        {HomeCardsData.map((e) => {
          return (
            <Col span={24}>
              <Card className="content-detail-card" key={e?.id}>
                <div className="detail-card-header-section">
                  <div className="left-section">
                    <Image src={e?.logo} alt="Company 1" />
                  </div>
                  <div className="right-section">
                    <div className="company-name-text">{e?.companyName}</div>
                    <Space direction="horizontal" align="end" size={2}>
                      <Rate defaultValue={e?.rate} />
                      <div className="rate-customers">
                        by {e?.customers} customer
                      </div>
                    </Space>
                  </div>
                </div>
                <Divider />
                <section className="card-content-section">
                  <section className="content-left-section">
                    <Space direction="vertical" align="start" size={20}>
                      <section>
                        <div className="operation-country">Operates in</div>
                        <div className="flag-country">
                          <Image src={e?.flag} className="flag-image" alt="#" />
                          <div className="country-name"> Greece</div>
                        </div>
                      </section>
                      <section>
                        <div className="vessel-number">
                          <div className="vessel-count">Vesselsnumber:</div>
                          <div className="vessel-count">{e?.vesselCount}</div>
                        </div>
                        <div className="vessel-number">
                          <div className="vessel-count">Ferry Types:</div>
                          <div className="vessel-count">{e?.ferryType}</div>
                        </div>
                      </section>
                      <section>
                        <div className="vessel-count">Popular Vessels:</div>
                        <div className="popular-vessels-type">
                          {e?.popularVessel}
                        </div>
                      </section>
                    </Space>
                  </section>
                  <section className="content-right-section">
                    <p className="description-text">{e?.description}</p>
                    <Divider />
                    <section>
                      <Button
                        className="read-more-button"
                        icon={<ArrowRightOutlined />}
                      >
                        {e?.moreText}
                      </Button>
                    </section>
                  </section>
                </section>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ContentCards;
