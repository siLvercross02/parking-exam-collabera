import React, { Fragment } from "react";
import { Row, Col, Card, Button } from "antd";
// utils
import entryOne from "../utils/entryOne";

export default function ParkingCards({ data, values }) {
  console.log("values", data);
  return (
    <Fragment>
      {/* Small parking */}
      <p>Entry 1 - Small Parking</p>
      <Row gutter={[16, 0]}>
        {data.map((item, index) => {
          return (
            <Col md={6} lg={6} xs={12} key={index}>
              <Card
                style={{
                  marginBottom: "1rem",
                  backgroundColor: `${
                    values && item.occupied === true ? "#dc3545" : "#198754"
                  }`,
                  color: "#fff",
                }}
              >
                <div className="text-center">
                  <p style={{ fontSize: "18px", fontWeight: "700" }}>
                    {item.parkingSlot === 0
                      ? `Small Parking ${item.parkingID} (SP)`
                      : item.parkingSlot === 1
                      ? `Medium Parking ${item.parkingID} (MP)`
                      : `Large Parking ${item.parkingID} (LP)`}
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    {values && item.occupied === true ? "Booked" : "Free Slot"}
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    {item.price ? item.price : "0.00"}
                  </p>
                  <Button type="primary">Exit Parking</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
}
