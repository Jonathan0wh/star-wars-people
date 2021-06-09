import { Card, Col, Skeleton } from "antd";
import { useGetFilmQuery } from "services/swApi";

import styles from "./FilmCard.module.scss";

interface FilmCardProps {
  id: string;
}

/**
 * Card component in Col for displaying information for a film
 *
 * @param {object} props The ID of the file that needs to be displayed
 * @returns A Card in a Col displaying information for a film
 */
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
