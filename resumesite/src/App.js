import React, { useRef } from "react";
import { Layout, Menu, Avatar, Button, Card, Row, Col, Typography } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TodoPage from "./components/TodoPage";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const App = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ background: "#001529" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Головна</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/todo">TODO</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "50px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <Row justify="center">
                  <Col xs={24} sm={24} md={16} lg={12} xl={10}>
                    <Card
                      hoverable
                      style={{ textAlign: "center", padding: "20px" }}
                      cover={<Avatar size={128} icon={<UserOutlined />} />}
                    >
                      <Title level={3}>Я — Вікторія</Title>
                      <Paragraph>
                        Привіт! Я front-end розробник в різних технологіях. В
                        мене є навички в React, JavaScript, HTML, СSS3, SCSS,
                        Git, Webpack,GulpJS, Adaptive/responsive markup та в
                        інших веб-технологіях.
                      </Paragraph>
                      <Button
                        type="primary"
                        size="large"
                        onClick={scrollToFooter}
                      >
                        Зв'язатися зі мною
                      </Button>
                    </Card>

                    <Card
                      title="Про себе"
                      bordered={false}
                      style={{ marginTop: "30px" }}
                    >
                      <Paragraph>
                        Я займаюсь розробкою веб-додатків з використанням
                        сучасних технологій. Маю досвід роботи інженером понад
                        15 років в будівельній індустрії. Маю некомерційний
                        досвід створення веб-сайтів, які можна подивитись за{" "}
                        <a
                          href="https://github.com/VITASETYUKOVA?tab=repositories"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          цим посиланням
                        </a>
                        .
                      </Paragraph>
                      <Paragraph>
                        Мої сильні сторони: надійність, здатність до командної
                        роботи, аналітичні здібності
                      </Paragraph>
                    </Card>
                  </Col>
                </Row>
              }
            />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </Content>

        <Footer
          ref={footerRef}
          style={{
            textAlign: "center",
            backgroundColor: "#001529",
            color: "#fff",
          }}
        >
          <div>
            <PhoneOutlined /> Телефон: +380 123 456 789 | <MailOutlined />{" "}
            Email: email@example.com
          </div>
          <div>
            <a href="/privacy" style={{ color: "#fff" }}>
              Політика конфіденційності
            </a>{" "}
            |{" "}
            <a href="/terms" style={{ color: "#fff" }}>
              Умови використання
            </a>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
