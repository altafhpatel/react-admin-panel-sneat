import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function UiButtons() {
  return (
    <Layout>
      <Row>
        <Col lg={6} className="mb-3">
          <Card className="pb-3">
            <CardHeader className="p-2"> Buttons Default</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="primary">Primary</Button>
            </Stack>
            <hr />
            <CardHeader className="p-2"> Buttons Pill</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Button pill variant="primary">Primary</Button>
              <Button pill variant="secondary">Secondary</Button>
              <Button pill variant="success">Success</Button>
              <Button pill variant="danger">Danger</Button>
              <Button pill variant="warning">Warning</Button>
              <Button pill variant="info">Info</Button>
              <Button pill variant="dark">Dark</Button>
              <Button pill variant="primary">Primary</Button>
            </Stack>
          </Card>
        </Col>

        <Col lg={6} className="mb-3">
          <Card className="pb-3">
            <CardHeader className="p-2"> Label Buttons Default</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="primary">Primary</Button>
            </Stack>
            <hr />
            <CardHeader className="p-2"> Label Buttons Pill</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Button pill variant="primary">Primary</Button>
              <Button pill variant="secondary">Secondary</Button>
              <Button pill variant="success">Success</Button>
              <Button pill variant="danger">Danger</Button>
              <Button pill variant="warning">Warning</Button>
              <Button pill variant="info">Info</Button>
              <Button pill variant="dark">Dark</Button>
              <Button pill variant="primary">Primary</Button>
            </Stack>
          </Card>
        </Col>

        <Col lg={6} className="mb-3">
          <Card className="pb-3">
            <CardHeader className="p-2"> Button with Buttons</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="primary">Primary</Button>
            </Stack>

            <hr />
            <CardHeader className="p-2"> Label Button Buttons</CardHeader>
            <Stack direction="horizontal" gap={2} className="px-2 flex-wrap">
              <Button pill variant="primary">Primary</Button>
              <Button pill variant="secondary">Secondary</Button>
              <Button pill variant="success">Success</Button>
              <Button pill variant="danger">Danger</Button>
              <Button pill variant="warning">Warning</Button>
              <Button pill variant="info">Info</Button>
              <Button pill variant="dark">Dark</Button>
              <Button pill variant="primary">Primary</Button>
            </Stack>

          </Card>
        </Col>

        <Col lg={6} className="mb-3">
          <Card className="pb-3">
            <CardHeader className="p-2"> Label Buttons Default</CardHeader>
            <Stack direction="horizontal" gap={2} className="p-2 flex-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="primary">Primary</Button>
            </Stack>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default UiButtons