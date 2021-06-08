import { Card, Col, Skeleton, Space, Typography } from "antd";
import { useGetFilmQuery } from "services/swApi";

import styles from "./FilmCard.module.scss";

interface FilmCardProps {
  id: string;
}

function FilmCard({ id }: FilmCardProps) {
  const { Text } = Typography;

  const { isLoading, isFetching, isSuccess, data } = useGetFilmQuery(id);

  return isSuccess && data ? (
    <Col span={8}>
      <Space>
        <Card
          title={data.title}
          loading={isFetching}
          className={styles.card_container}
        >
          <Skeleton loading={isLoading} />

          <Text>{data.opening_crawl}</Text>
        </Card>
      </Space>
    </Col>
  ) : null;
}

export default FilmCard;
