import { Layout } from "antd";

import "./App.scss";

function App() {
  const { Content } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <Content>Content</Content>
    </Layout>
  );
}

export default App;
