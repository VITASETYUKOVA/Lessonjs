import React from "react";
import { Layout as AntLayout } from "antd";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = AntLayout;

export default function Layout() {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#001529", padding: 0 }}>
        <Navigation />
      </Header>

      <Content style={{ padding: "20px 50px", background: "#fff" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © 2024 Booking. All Rights Reserved.
      </Footer>
    </AntLayout>
  );
}
