import React from "react";
import Layout from "../../Layout/Layout";
import { Badge, Card, Col, Row, Stack } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function UiBadges() {
  return (
    <Layout>
      <Row>
        <Col lg={6}>
          <Card className="pb-3 mb-3">
            <CardHeader className="p-2"> Badges Default</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Badge bg="primary">Primary</Badge>
              <Badge bg="secondary">Secondary</Badge>
              <Badge bg="success">Success</Badge>
              <Badge bg="danger">Danger</Badge>
              <Badge bg="warning">Warning</Badge>
              <Badge bg="info">Info</Badge>
              <Badge bg="dark">Dark</Badge>
              <Badge bg="primary">Primary</Badge>
            </Stack>
            <hr />
            <CardHeader className="p-2"> Badges Pill</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Badge pill bg="primary">Primary</Badge>
              <Badge pill bg="secondary">Secondary</Badge>
              <Badge pill bg="success">Success</Badge>
              <Badge pill bg="danger">Danger</Badge>
              <Badge pill bg="warning">Warning</Badge>
              <Badge pill bg="info">Info</Badge>
              <Badge pill bg="dark">Dark</Badge>
              <Badge pill bg="primary">Primary</Badge>
            </Stack>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="pb-3">
            <CardHeader className="p-2"> Label Badges Default</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Badge bg="primary">Primary</Badge>
              <Badge bg="secondary">Secondary</Badge>
              <Badge bg="success">Success</Badge>
              <Badge bg="danger">Danger</Badge>
              <Badge bg="warning">Warning</Badge>
              <Badge bg="info">Info</Badge>
              <Badge bg="dark">Dark</Badge>
              <Badge bg="primary">Primary</Badge>
            </Stack>
            <hr />
            <CardHeader className="p-2"> Label Badges Pill</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Badge pill bg="primary">Primary</Badge>
              <Badge pill bg="secondary">Secondary</Badge>
              <Badge pill bg="success">Success</Badge>
              <Badge pill bg="danger">Danger</Badge>
              <Badge pill bg="warning">Warning</Badge>
              <Badge pill bg="info">Info</Badge>
              <Badge pill bg="dark">Dark</Badge>
              <Badge pill bg="primary">Primary</Badge>
            </Stack>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="pb-3">
            <CardHeader className="p-2"> Button with Badges</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Badge bg="primary">Primary</Badge>
              <Badge bg="secondary">Secondary</Badge>
              <Badge bg="success">Success</Badge>
              <Badge bg="danger">Danger</Badge>
              <Badge bg="warning">Warning</Badge>
              <Badge bg="info">Info</Badge>
              <Badge bg="dark">Dark</Badge>
              <Badge bg="primary">Primary</Badge>
            </Stack>
            
            <hr />
            <CardHeader className="p-2"> Label Button Badges</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Badge pill bg="primary">Primary</Badge>
              <Badge pill bg="secondary">Secondary</Badge>
              <Badge pill bg="success">Success</Badge>
              <Badge pill bg="danger">Danger</Badge>
              <Badge pill bg="warning">Warning</Badge>
              <Badge pill bg="info">Info</Badge>
              <Badge pill bg="dark">Dark</Badge>
              <Badge pill bg="primary">Primary</Badge>
            </Stack>

            <hr />
            <CardHeader className="p-2"> Outline Button Badges</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Badge pill bg="primary">Primary</Badge>
              <Badge pill bg="secondary">Secondary</Badge>
              <Badge pill bg="success">Success</Badge>
              <Badge pill bg="danger">Danger</Badge>
              <Badge pill bg="warning">Warning</Badge>
              <Badge pill bg="info">Info</Badge>
              <Badge pill bg="dark">Dark</Badge>
              <Badge pill bg="primary">Primary</Badge>
            </Stack>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="pb-3">
            <CardHeader className="p-2"> Label Badges Default</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Badge bg="primary">Primary</Badge>
              <Badge bg="secondary">Secondary</Badge>
              <Badge bg="success">Success</Badge>
              <Badge bg="danger">Danger</Badge>
              <Badge bg="warning">Warning</Badge>
              <Badge bg="info">Info</Badge>
              <Badge bg="dark">Dark</Badge>
              <Badge bg="primary">Primary</Badge>
            </Stack>
            <hr />
            <CardHeader className="p-2"> Label Badges Pill</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Badge pill bg="primary">Primary</Badge>
              <Badge pill bg="secondary">Secondary</Badge>
              <Badge pill bg="success">Success</Badge>
              <Badge pill bg="danger">Danger</Badge>
              <Badge pill bg="warning">Warning</Badge>
              <Badge pill bg="info">Info</Badge>
              <Badge pill bg="dark">Dark</Badge>
              <Badge pill bg="primary">Primary</Badge>
            </Stack>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default UiBadges