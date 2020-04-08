import React from "react";
import { Input, Button, Spin, Pagination } from "antd";


const Login = () => {
  return (
    <div style={{
      width: "100%",
      height: "100vh"
    }}>
      <h1>Login</h1>
      <Button>
        Login
      </Button>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Spin/>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
};

export default Login;
