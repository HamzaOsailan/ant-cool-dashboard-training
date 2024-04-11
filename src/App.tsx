import { Anchor, Avatar, Button, Card, Col, Descriptions, Divider, Dropdown, Empty, FloatButton, Form, Input, Layout, List, Menu, Modal, Row, Space, Steps, Table, Tag, TimePicker, Typography, notification } from "antd"
import "./styles/dashboard.css"
import Sider from "antd/es/layout/Sider"
import { Content, Header } from "antd/es/layout/layout"
import { HiOutlineHome } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAdd, GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { faker } from '@faker-js/faker'
import ButtonGroup from "antd/es/button/button-group";
import dayjs from "dayjs";

const generateData = () => {
  const dat = [];

  for (let i = 0; i < 34; i++) {
    dat.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false
    })

  }
  return dat
}

const data = generateData()

function App() {
  const [collpased, setCollpased] = useState(false)
  const [ModalOpen,setModalOpen]=useState(false)
  return (
    <Layout className="container">
      <Header style={{
        backgroundColor:"black",
        color:"white"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiHamburgerMenu onClick={() => setCollpased(!collpased)} size={28} style={{ marginRight: 20 }} />
          <div className="brand">
            Cool - dashboard
          </div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collpased} theme="light">
          <Menu mode="inline" items={[
            {
              label: "Home",
              key: "home",
              icon: <HiOutlineHome />,
              children: [
                {
                  label: "Add profile",
                  key: "add_profile",
                  icon: <BsPerson />
                },
                {
                  label: "All users",
                  key: "all_users"
                },
              ]
            },
            {
              label: "About us",
              key: "about_us",
              icon: <GrOrganization />
            },
           
     
          ]} />
        </Sider>
        <Content className="content">
          <Space direction="horizontal">
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>

              </Space>
              <Typography.Title>
                $234344
              </Typography.Title>
            </Card>

            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>

              </Space>
              <Typography.Title>
                $2323
              </Typography.Title>
            </Card>

            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>

              </Space>
              <Typography.Title>
                $5434344
              </Typography.Title>
            </Card>

          </Space>
          <Divider />
          
          <Card>
          <FloatButton icon={<GrAdd/>}/>
          <Button onClick={()=>{
            notification.success({
              message:"User registerd successfully"
            })
          }}>
            show notification
          </Button>
            <Button onClick={()=>{setModalOpen(true)}}>Add User</Button>
            <Button danger type="primary" onClick={()=>{
              Modal.confirm({
                title: 'Do you Want to delete these items?',
                content: 'Some descriptions',
              })
            }}>Delete</Button>
            <List bordered dataSource={data.slice(0,3)} renderItem={(item)=>{
              return <List.Item>
                <Descriptions  title={"User Details"}>
                  <Descriptions.Item label={"Name"}>
                    {item.name}
                  </Descriptions.Item>
                  <Descriptions.Item label={"Name"}>
                    {item.email}
                  </Descriptions.Item>
                  <Descriptions.Item label={"Name"}>
                    {item.status ?"Active":"Not Active"}
                  </Descriptions.Item>
                </Descriptions>
                </List.Item>
            }}/>
            <List>
              <List.Item>
                Hello
              </List.Item>
              <List.Item>
                test
              </List.Item>
              <List.Item>
                test1
              </List.Item>
            </List>
            <Descriptions bordered title={"Users data"}>
              <Descriptions.Item span={2} label={"Name"}>Jay</Descriptions.Item>
              <Descriptions.Item label={"Roll"}>18</Descriptions.Item>
              <Descriptions.Item label={"Address"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel itaque dignissimos necessitatibus?
              </Descriptions.Item>       
            </Descriptions>
            <Empty/>
            <Avatar size={"large"} src="https://yt3.ggpht.com/a/AGF-l7_5KJNSlcNHO2YQz2xfxGyzA3Vm7DjJEGA6Vw=s900-mo-c-c0xffffffff-rj-k-no"></Avatar>
            <Form onFinish={(values) => {
              console.log(values);
            }}
            layout="vertical">
              <Form.Item name={"name"} label={"Name"}>
                <Input/>
              </Form.Item>
              <Form.Item name={"email"} label={"Email"}>
                <Input type="email"/>
              </Form.Item>
              <Form.Item name={"password"} label={"Password"}>
                <Input type="password"/>
              </Form.Item>
              <Form.Item name={"time"} label={"Pick some time"}>
              <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
              </Form.Item>
            </Form>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Sign up
              </Button>
            </Form.Item>
            
          </Card>
          <Card>
            <Steps current={1} items={[
              {
                title: "Signup",
                description: "sign up "
              },
              {
                title:"Buy subscription ",
                description:"But some subscription"
              },
              {
                title: "Something else",
                description: "Do some thing else with this"
              },

            ]} />
          </Card>
          <Row gutter={10} style={{ marginTop: 10 }}>
            <Col span={18}   >
              <Table

                dataSource={data}
                columns={[
                  {
                    dataIndex: "id",
                    title: "ID",
                    key: "id",
                    fixed: true,

                  }, {
                    dataIndex: "name",
                    title: "name",
                    key: "name"
                  },

                  {
                    dataIndex: "email",
                    title: "Email Id",
                    key: "email"
                  },
                  {
                    dataIndex: "status",
                    title: "Status",
                    render: (val) => val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>
                  },
                  {
                    title: "Actions",
                    render: () => (
                      <ButtonGroup>
                        <Button>Edit</Button>
                        <Button type="primary" danger>Delete</Button>
                      </ButtonGroup>
                    )
                  }
                ]} />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Modal open={ModalOpen} onCancel={()=>setModalOpen(false)} title={"Add a new user"}>
        <Form>
          <Form.Item label={"Name"}>
            <Input/>
          </Form.Item>
          <Form.Item label={"Email"}>
            <Input/>
          </Form.Item>
         
        </Form>
      </Modal>
    </Layout>
  )
}

export default App
