import { Col, Row, Typography } from "antd";

import styles from "./PersonDetail.module.scss";

function PersonDetail() {
  const { Title, Text } = Typography;

  return (
    <Row>
      <Col className={styles.column_container}>
        <Row>
          <Col>
            <Title level={4}>Person Detail</Title>
          </Col>
        </Row>

        <Row>
          <Col flex={1}>
            <Text strong>Name:</Text>
          </Col>
          <Col flex={2}></Col>
        </Row>

        <Row>
          <Col flex={1}>
            <Text strong>Birth year:</Text>
          </Col>
          <Col flex={2}></Col>
        </Row>

        <Row>
          <Col flex={1}>
            <Text strong>Gender:</Text>
          </Col>
          <Col flex={2}></Col>
        </Row>

        <Row>
          <Col>
            <Text strong>List of films:</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default PersonDetail;
