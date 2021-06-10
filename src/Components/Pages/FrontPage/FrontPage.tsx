import { RefObject, useEffect, useRef } from "react";
import { useAppDispatch } from "hooks/react-redux";
import { Col, Divider, Layout, Row } from "antd";
import PeopleTable from "Components/Views/PeopleTable";
import PersonDetail, {
  updatePersonDetail,
} from "Components/Views/PersonDetail";

/**
 * Front Page
 *
 * @returns Layout of the Front Page
 */
function FrontPage() {
  const { Content } = Layout;

  const personDetailSectionRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const scrollTo = (ref: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      dispatch(
        updatePersonDetail({
          name: "",
          birthYear: "",
          gender: "",
          filmIDs: [],
        })
      );
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <Row justify="center" align="middle">
          <Col>
            <PeopleTable
              scrollToPersonDetail={() => scrollTo(personDetailSectionRef)}
            />
            <Divider />
            <PersonDetail sectionRef={personDetailSectionRef} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default FrontPage;
