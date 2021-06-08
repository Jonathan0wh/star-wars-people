import { useState } from "react";
import { useAppDispatch } from "hooks/react-redux";
import { Col, Row, Skeleton, Table, Typography } from "antd";
import { useGetPeopleQuery } from "services/swApi";

import { updatePersonDetail } from "../PersonDetail";

import styles from "./PeopleTable.module.scss";

function PeopleTable() {
  const { Column } = Table;
  const { Link, Title } = Typography;

  const [page, setPage] = useState(1);

  const { isLoading, isFetching, isSuccess, data } = useGetPeopleQuery(page);

  const dispatch = useAppDispatch();

  return (
    <Row justify="center">
      <Col className={styles.column_container}>
        <Skeleton paragraph={{ rows: 11 }} loading={isLoading} />

        {isSuccess && data && (
          <Table
            dataSource={data.results}
            rowKey="url"
            loading={isFetching}
            title={() => <Title level={4}>Star Wars People</Title>}
            bordered
            onRow={(record) => ({
              onClick: () =>
                dispatch(
                  updatePersonDetail({
                    name: record.name,
                    birthYear: record.birth_year,
                    gender: record.gender,
                    filmIDs: record.films.map((filmUrl) => {
                      if (typeof filmUrl === "string") {
                        return filmUrl
                          .replace("http://swapi.dev/api/films/", "")
                          .replace("/", "");
                      } else {
                        return "";
                      }
                    }),
                  })
                ),
            })}
            onChange={(pagination) => {
              dispatch(
                updatePersonDetail({
                  name: "",
                  birthYear: "",
                  gender: "",
                  filmIDs: [],
                })
              );
              setPage(pagination.current || 1);
            }}
            pagination={{
              current: page,
              total: data.count,
              showSizeChanger: false,
              itemRender: (current, type, originalElement) => {
                if (type === "prev") {
                  return <Link>Previous</Link>;
                }
                if (type === "next") {
                  return <Link>Next</Link>;
                }
                return originalElement;
              },
            }}
          >
            <Column title="Name" dataIndex="name" width={300} />
            <Column title="Height" dataIndex="height" width={300} />
            <Column title="Mass" dataIndex="mass" width={300} />
          </Table>
        )}
      </Col>
    </Row>
  );
}

export default PeopleTable;