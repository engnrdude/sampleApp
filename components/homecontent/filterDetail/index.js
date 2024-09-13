import { Card, Divider, Select, Checkbox } from "antd";
import { WifiOutlined } from "@ant-design/icons";
import React from "react";

const FilterDetail = ({ filterOpen, setFilterOpen }) => {
  return (
    <>
      {filterOpen && (
        <Card bordered={false} className="filter-detail-card">
          <section className="header-section">
            <div className="filter-text">Filters</div>
            <div className="filter-cancel-icon" onClick={()=>setFilterOpen(false)}>X</div>
          </section>
          <div className="select-title">Operation-in</div>
          <Select
            className="select-button"
            bordered={false}
            placeholder={
              <>
                <WifiOutlined /> Select a Country
              </>
            }
          ></Select>
          <Divider />
          <div className="filter-type-text">Ferry types</div>
          <Checkbox>Normal Ferries</Checkbox>
          <Checkbox>High Speed Ferries</Checkbox>
        </Card>
      )}
    </>
  );
};

export default FilterDetail;
