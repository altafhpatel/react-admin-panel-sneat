import React from "react";
import Layout from "../../Layout/Layout";
import { Alert, Row } from "react-bootstrap";

function UiAlerts() {
  return (
    <Layout>
      <Row>

        <div class="col-md mb-4 mb-md-0 only_support basic_alerts">
          <div className="only_support bg-white p-3 only_support card">
            <h5 class="mb-3 only_support">Basic Alerts</h5>

            <Alert variant="primary">This is a primary alert — check it out!</Alert>
            <Alert variant="secondary">This is a secondary alert — check it out!</Alert>
            <Alert variant="success">This is a success alert — check it out!</Alert>
            <Alert variant="danger">This is a danger alert — check it out!</Alert>
            <Alert variant="warning">This is a warning alert — check it out!</Alert>
            <Alert variant="info">This is a info alert — check it out!</Alert>
            <Alert variant="dark">This is a dark alert — check it out!</Alert>

          </div>
        </div>{/* Basic Alerts */}

        <div class="col-md mb-4 mb-md-0 only_support basic_alerts">
          <div className="only_support bg-white p-3 only_support card">
            <h5 class="mb-3 only_support">Dismissable Alerts</h5>

            <Alert variant="primary" dismissible> This is a primary alert — check it out!</Alert>
            <Alert variant="secondary" dismissible>This is a secondary alert — check it out!</Alert>
            <Alert variant="success" dismissible>This is a success alert — check it out!</Alert>
            <Alert variant="danger" dismissible>This is a danger alert — check it out!</Alert>
            <Alert variant="warning" dismissible>This is a warning alert — check it out!</Alert>
            <Alert variant="info" dismissible>This is a info alert — check it out!</Alert>
            <Alert variant="dark" dismissible>This is a dark alert — check it out!</Alert>

          </div>
        </div>{/* Basic Alerts */}

      </Row>
    </Layout>
  )

}

export default UiAlerts