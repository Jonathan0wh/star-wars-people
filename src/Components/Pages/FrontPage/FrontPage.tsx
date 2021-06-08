import { Col, Divider, Layout, Row } from "antd";
import PeopleTable from "Components/Views/PeopleTable";
import PersonDetail from "Components/Views/PersonDetail";

function FrontPage() {
  const { Content } = Layout;

  return (
    <Layout>
      <Content>
        <Row justify="center" align="middle">
          <Col>
            <PeopleTable />
            <Divider />
            <PersonDetail />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default FrontPage;
