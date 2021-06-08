import { useAppSelector } from "hooks/react-redux";
import { Col, Row, Typography } from "antd";
import FilmCard from "Components/Shared/FilmCard";

import styles from "./PersonDetail.module.scss";

function PersonDetail() {
  const { Title, Text } = Typography;

  const { name, birthYear, gender, filmIDs } = useAppSelector(
    (state) => state.personDetail
  );

  return !!name ? (
    <Row className={styles.column_container}>
      <Col className={styles.column_container}>
        <Row>
          <Col>
            <Title level={4}>Person Detail</Title>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text strong>Name:&nbsp;</Text>
          </Col>
          <Col>
            <Text>{name}</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text strong>Birth year:&nbsp;</Text>
          </Col>
          <Col>
            <Text>{birthYear}</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text strong>Gender:&nbsp;</Text>
          </Col>
          <Col>
            <Text>{gender}</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text strong>List of films:</Text>
          </Col>
        </Row>
        <Row gutter={16}>
          {filmIDs.map((filmID) => (
            <FilmCard key={filmID} id={filmID} />
          ))}
        </Row>
      </Col>
    </Row>
  ) : null;
}

export default PersonDetail;
