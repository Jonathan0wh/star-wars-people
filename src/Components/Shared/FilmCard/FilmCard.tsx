import { Card, Col, Skeleton } from "antd";
import { useGetFilmQuery } from "services/swApi";

import styles from "./FilmCard.module.scss";

interface FilmCardProps {
  id: string;
}

function FilmCard({ id }: FilmCardProps) {
  const { Meta } = Card;

  const { isLoading, isFetching, data } = useGetFilmQuery(id);

  return (
    <Col flex="300px">
      <Card hoverable>
        <Skeleton
          active
          loading={isLoading || isFetching}
          paragraph={{ rows: 8, width: "100%" }}
          className={styles.skeleton}
        >
          <Meta title={data?.title} description={data?.opening_crawl} />
        </Skeleton>
      </Card>
    </Col>
  );
}

export default FilmCard;
