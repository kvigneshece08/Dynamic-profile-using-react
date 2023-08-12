import React, { useEffect, useState } from "react";
import { Col, Row, Image, ConfigProvider, theme } from "antd";
import axios from "axios";
import dateFormat from "dateformat";
import { RightOutlined } from "@ant-design/icons";
import { AnimatePresence, motion as m } from "framer-motion";

const baseURL = "https://randomuser.me/api/";
const HomePage = () => {
  const [data, setData] = useState(null);
  const callApiData = async () => {
    await axios.get(baseURL).then((response) => {
      const newData = response.data && response.data.results;
      if (newData) setData(newData[0]);
    });
  }; // api call made to randomuser api

  useEffect(() => {
    callApiData();
  }, []);

  const nextClick = () => {
    callApiData();
  }; // handle next asset button click

  const RandomColor = () => {
    const colors = ["red", "orange", "yellow", "blue", "black"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }; // generate random colors from colors array

  const date =
    data && dateFormat(data.dob.date, "isoDate").split("-").reverse().join("-"); //reverse the date format to (DD-MM-YYYY format)

  return (
    <AnimatePresence>
      <>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm
          }}
        >
          <m.div
            transition={{ duration: 3, ease: "easeIn" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={data && data.id.value}
            exit={{ opacity: 0 }}
          >
            <Row>
              <Col span={12} className="timestamp">
                {data && dateFormat(data.registered.date, "h:MM:ss TT Z")}
              </Col>
              <Col span={12}>
                <Row>
                  <Col flex={2}>
                    <Image
                      width={386}
                      height={386}
                      src={data && data.picture.large}
                    />
                  </Col>
                  <Col flex={3}>
                    <Row>
                      <Col className="title" span={24}>
                        {data && data.login.username.toUpperCase()}
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col span={12}>
                        <span className="key-color">FNAME</span>{" "}
                        {data && data.name.first.toUpperCase()}
                      </Col>
                      <Col span={12}>
                        <span className="key-color">LNAME</span>{" "}
                        {data && data.name.last.toUpperCase()}
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col span={12}>
                        <span className="key-color">SEX</span>{" "}
                        {data && data.gender.toUpperCase()}
                      </Col>
                      <Col span={12}>
                        <span className="key-color">AGE</span>{" "}
                        {data && data.dob.age}
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col span={12}>
                        <span className="key-color">EYES</span>{" "}
                        {RandomColor().toUpperCase()}
                      </Col>
                      <Col span={12}>
                        <span className="key-color">DOB</span> {date}
                      </Col>
                    </Row>
                    <Col
                      justify="center"
                      span={24}
                      className="address-container"
                    >
                      <span className="key-color">ADDRESS </span>
                      {data && data.location.street.number}{" "}
                      {data && data.location.street.name.toUpperCase()}{" "}
                      {data && data.location.city.toUpperCase()}{" "}
                      {data && data.location.state.toUpperCase()}{" "}
                      {data && data.location.country.toUpperCase()}{" "}
                      {data && data.location.postcode}
                    </Col>
                    <Col
                      justify="center"
                      span={24}
                      className="timezone-container"
                    >
                      <span className="key-color">TIMEZONE </span>
                      {data &&
                        data.location.timezone.description.toUpperCase()}{" "}
                      {data && data.location.timezone.offset}
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </m.div>
          <RightOutlined
            title="Next Asset"
            onClick={() => nextClick()}
            className="next-icon"
          />
        </ConfigProvider>
      </>
    </AnimatePresence>
  );
};

export default HomePage;
