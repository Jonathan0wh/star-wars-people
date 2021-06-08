import { Card, Col, Typography } from "antd";
import { useGetFilmQuery } from "services/swApi";

import styles from "./FilmCard.module.scss";

interface FilmCardProps {
  id: string;
}

function FilmCard({ id }: FilmCardProps) {
  const { Text } = Typography;

  const { isSuccess, data } = useGetFilmQuery(id);

  return isSuccess && data ? (
    <Col span={8}>
      <Card title={data.title} className={styles.card_container}>
        <Text>{data.opening_crawl}</Text>
      </Card>
    </Col>
  ) : null;
}

export default FilmCard;
