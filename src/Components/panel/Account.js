import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';


import Layout from '../Layout/Layout';

import Profile from "./account/Profile";
import Notification from "./account/Notifications";
import Connections from "./account/Connections";

function Account() {
    return (
        <Layout>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Account Settings /</span> Title</h4>

            <Row>
                <Col className="col-md-12">
                    <Tab.Container defaultActiveKey="profile">
                    <Nav variant="pills" className="flex-md-row mb-3">
                        <Nav.Item>
                            <Nav.Link eventKey="profile"><i className="bx bx-user me-1"></i> Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="notifications"> <i className="bx bx-bell me-1"></i>Notifications</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="connections"><i className="bx bx-link-alt me-1"></i>Connections</Nav.Link>
                        </Nav.Item>
                    </Nav>


                    <Tab.Content className="p-0">
                        <Tab.Pane eventKey="profile"> <Profile /> </Tab.Pane>
                        <Tab.Pane eventKey="notifications"><Notification /></Tab.Pane>
                        <Tab.Pane eventKey="connections"><Connections /></Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>


                </Col>
            </Row>
        </Layout>

    )
}

export default Account