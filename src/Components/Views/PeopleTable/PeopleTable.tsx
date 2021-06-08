import { useState } from "react";
import { Col, Row, Table, Typography } from "antd";
import { useGetPeopleQuery } from "services/swApi";

import styles from "./PeopleTable.module.scss";

function PeopleTable() {
  const { Column } = Table;
  const { Link, Title } = Typography;

  const [page, setPage] = useState(1);

  const { isFetching, isSuccess, data } = useGetPeopleQuery(page);

  return (
    <Row>
      <Col className={styles.column_container}>
        {isSuccess && data && (
          <Table
            dataSource={data.results}
            rowKey="url"
            loading={isFetching}
            title={() => <Title level={4}>Star Wars People</Title>}
            bordered
            onRow={(record) => ({
              onClick: () => {
                console.log(record);
              },
            })}
            onChange={(pagination) => setPage(pagination.current || 1)}
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
