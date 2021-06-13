import { useAppSelector } from "hooks/react-redux";
import { Col, Row, Space, Typography } from "antd";
import FilmCard from "Components/Shared/FilmCard";

import styles from "./PersonDetail.module.scss";

interface PersonDetailProps {
  sectionRef: React.Ref<HTMLDivElement>;
}

/**
 * Display a person's detail
 *
 * @param props.ref ref to container div
 * @returns A person's detail in a row, including all his film cards
 */
function PersonDetail({ sectionRef }: PersonDetailProps) {
  const { Title, Text } = Typography;

  const { name, birthYear, gender, filmIDs } = useAppSelector(
    (state) => state.personDetail
  );

  return (
    <Row className={styles.row_container} ref={sectionRef}>
      <Col>
        {!!name && (
          <>
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
            <Space wrap className={styles.films_container}>
              <Row gutter={[16, 16]}>
                {filmIDs.map((filmID) => (
                  <FilmCard key={filmID} id={filmID} />
                ))}
              </Row>
            </Space>
          </>
        )}
      </Col>
    </Row>
  );
}

export default PersonDetail;
