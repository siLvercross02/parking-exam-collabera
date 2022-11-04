import React, { useState } from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
} from "antd";
import ParkingCards from "./ParkingCards";
import entryOne from "../utils/entryOne";

export default function LayoutComponent() {
  const { Header, Content, Footer } = Layout;
  const { Option } = Select;
  const [dataForm, setDataForm] = useState([]);
  const [values, setValues] = useState([]);

  const handleFinish = (values) => {
    console.log("values", values);
    // const min = Math.min(...entryOne.map((item) => item.id));
    // setDataForm(values);
    // setMin(min);
    const indexEntry = entryOne.find((item) => {
      return item.entry === values.entryPoint;
    });

    if (indexEntry) {
      const parkingSpaceIndex = entryOne.findIndex(
        (item) => item.entry === values.entryPoint
      );

      const parkingSlotIndex = entryOne.findIndex(
        (item) => item.parkingSlot === values.parkingSlot
      );

      console.log("index", parkingSlotIndex);

      const newObject = Object.assign(entryOne[parkingSpaceIndex], {
        key: parkingSpaceIndex,
        parkingID: parkingSpaceIndex,
        entry: parkingSpaceIndex,
        parkingSlot: parkingSlotIndex,
        occupied: true,
        price: 40,
      });

      // const newValues = Object.assign(values, {
      //   carSize: values.carSize,
      //   endHours: values.endHours,
      //   entryPoint: values.entryPoint,
      //   parkingSlot: values.parkingSlot,
      //   startingHours: values.startingHours,
      // });

      setValues(values);
      setDataForm([newObject, ...entryOne]);
      console.log("parking", newObject);
    }

    console.log("data", indexEntry);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(1).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `Parking Lot`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          {/* Input details here */}
          <Form layout="vertical" onFinish={handleFinish}>
            <Row gutter={[16, 0]}>
              <Col md={4} lg={4} xs={12}>
                <Form.Item name="entryPoint" label="Entry Point">
                  <Select>
                    <Option value={0}>Entry 1</Option>
                    <Option value={1}>Entry 2</Option>
                    <Option value={2}>Entry 3</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col md={4} lg={4} xs={12}>
                <Form.Item name="carSize" label="Car Size">
                  <Select>
                    <Option value={0}>Small (S)</Option>
                    <Option value={1}>Medium (M)</Option>
                    <Option value={2}>Large (L)</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col md={4} lg={4} xs={12}>
                <Form.Item name="startingHours" label="Starting Hours">
                  <Input />
                </Form.Item>
              </Col>
              <Col md={4} lg={4} xs={12}>
                <Form.Item name="endHours" label="Ending Hours">
                  <Input />
                </Form.Item>
              </Col>
              <Col md={4} lg={4} xs={12}>
                <Form.Item name="parkingSlot" label="Parking Slot">
                  <Select>
                    <Option value={0}>Small (SP)</Option>
                    <Option value={1}>Medium (MP)</Option>
                    <Option value={2}>Large (LP)</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Row>
          </Form>
          <br />
          <p>Parking Here</p>
          <br />
          <ParkingCards data={dataForm} values={values} />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Parking Lot
      </Footer>
    </Layout>
  );
}
