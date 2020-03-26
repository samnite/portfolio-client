import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { connect } from "react-redux";
import { setMainPage } from "../../store/actions/projects-actions";

const StyledForm = styled(Form)`
  max-width: 300px;
  margin: 20px auto;
  svg {
    color: rgba(0, 0, 0, 0.25);
  }
  .login-form-button {
    width: 100%;
    background-color: var(--primary-color);
    border-color: var(--primary-hover-color);
    margin-bottom: 5px;
  }
`;

const Admin = ({ setMainPage }) => {
  useEffect(() => {
    setMainPage(false);
    // eslint-disable-next-line
  }, []);

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return (
    <StyledForm
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or{" "}
        <a href="https://agrib.pp.ua/" rel="noopener noreferrer">
          register now!
        </a>
      </Form.Item>
    </StyledForm>
  );
};

export default connect(null, { setMainPage })(Admin);
