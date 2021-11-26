import React, { Component  } from 'react';
import handleServerSignup from './func/handleServerSignup';
import history from "./history";
import { Form, Input, Button, Checkbox } from 'antd';
function Signup() {
  const handleSubmit = async (e) => {
    try {
      let formBody = [];
      for (let property of ["username","email", "password"]) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(e[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      let response = await handleServerSignup(formBody);
      if (response) {
        history.push({ pathname: "/", state: response.username });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
         <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!",type:"email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
  );
}
export default Signup;