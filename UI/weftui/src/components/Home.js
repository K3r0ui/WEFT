// src/Home.js
import React, { useEffect, useState } from 'react';
import { myToDoListApi } from './MyToDoListApi';
import { Layout, Col, Row } from 'antd';
import ToDoForm from './ToDoForm';
import ToDoTable from './ToDoTable';
import { useUser } from '../UserContext';
import AuthBar from './AuthBar';
import { Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

function Home() {
  const [todos, setTodos] = useState([]);
  const { user } = useUser();
  const access_token = user?.access_token; 
  const username = user?.profile?.preferred_username;
  useEffect(() => {
    if (access_token) {
      handleToDos();
    }
  }, [access_token]);

  const handleToDos = async () => {
    try {
      const response = await myToDoListApi.getToDos(access_token);
      setTodos(response.data);
    } catch (error) {
      handleLogError(error);
    }
  };

  const onFinish = async (addToDoRequest) => {
    try {
      await myToDoListApi.addToDo(addToDoRequest, username, access_token);
      await handleToDos();
    } catch (error) {
      handleLogError(error);
    }
  };

  const onComplete = async (key) => {
    try {
      await myToDoListApi.updateToDo(key, true, access_token);
      await handleToDos();
    } catch (error) {
      handleLogError(error);
    }
  };

  const onDelete = async (key) => {
    try {
      await myToDoListApi.deleteToDo(key, access_token);
      await handleToDos();
    } catch (error) {
      handleLogError(error);
    }
  };
  const isUser = () => {
    if (!user || !user.profile) {
    }

    const clientRoles = user.profile.client_roles || [];
    console.log(user.profile.client_roles)
    return clientRoles.some(role => role.includes('user'));
  };
  const handleLogError = (error) => {
    if (error.response) {
      console.log("Response Error:", error.response.data);
    } else if (error.request) {
      console.log("Request Error:", error.request);
    } else {
      console.log("General Error:", error.message);
    }
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#333',
    fontSize: '3em',
  };

  return (
    <Layout>
      <Header style={headerStyle}>Crud Test</Header>
      <AuthBar />
      {isUser() ? (
        <Content>
          <Row justify="space-evenly">
            <Col span={6}>
              <ToDoForm onFinish={onFinish} />
            </Col>
            <Col span={17}>
              <ToDoTable
                todos={todos}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            </Col>
          </Row>
        </Content>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Title>Oops ...</Title>
          <Title level={2} style={{ color: 'grey' }}>
            It looks like you do not have the MY-TODO-LIST-USER role!
          </Title>
        </div>
      )}
    </Layout>
  );
}

export default Home;
