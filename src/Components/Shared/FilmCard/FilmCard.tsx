import { Card, Col, Skeleton, Typography } from "antd";
import { useGetFilmQuery } from "services/swApi";

import styles from "./FilmCard.module.scss";

interface FilmCardProps {
  id: string;
}

function FilmCard({ id }: FilmCardProps) {
  const { Text } = Typography;

  const { isLoading, isFetching, isSuccess, data } = useGetFilmQuery(id);

  return isSuccess && data ? (
    <Col flex="300px">
      <Card
        title={data.title}
        loading={isFetching}
        className={styles.card_container}
        hoverable
      >
        <Skeleton loading={isLoading} />

        <Text>{data.opening_crawl}</Text>
      </Card>
    </Col>
  ) : null;
}

export default FilmCard;
