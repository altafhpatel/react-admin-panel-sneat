import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../Layout/Layout";

import BasicDefault from "../panel/formelements/BasicDefault"
import BasicFloatLabel from "../panel/formelements/BasicFloatLabel"
import BasicFormControls from "./formelements/BasicFormControls";
import BasicInputSizing from "./formelements/BasicInputSizing";
import BasicCheckboxesRadio from "./formelements/BasicCheckboxesRadio";
import BasicSwitches from "./formelements/BasicSwitches";
import BasicHtmlInputs from "./formelements/BasicHtmlInputs";
import BasicFileInputs from "./formelements/BasicFileInputs";
import BasicRange from "./formelements/BasicRange";

function BasicInputs() {
  return (
    <Layout>
      <Row>
        <Col>
          <div class="card mb-4">
            <h5 class="card-header">Default</h5>
            <div class="card-body">

              <BasicDefault />

            </div>
          </div>
        </Col>
        <Col>
          <div class="card mb-4">
            <h5 class="card-header">Float label</h5>
            <div class="card-body">

              <BasicFloatLabel />

            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div class="card mb-4">
            <h5 class="card-header">Form Controls</h5>
            <div class="card-body">

              <BasicFormControls />

            </div>
          </div>
        </Col>
        <Col>
          <div class="card mb-4">
            <h5 class="card-header">Input Sizing & Shape</h5>
            <div class="card-body">

              <BasicInputSizing />

            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div class="card mb-4">
            <h5 class="card-header">Checkboxes and Radios</h5>
            <div class="card-body">

              <BasicCheckboxesRadio />

            </div>
          </div>

          <div class="card mb-4">
            <h5 class="card-header">Switches</h5>
            <div class="card-body">

              <BasicSwitches />

            </div>
          </div>
        </Col>
        <Col>
          <div class="card mb-4">
            <h5 class="card-header">HTML5 Inputs</h5>
            <div class="card-body">

              <BasicHtmlInputs />

            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div class="card mb-4">
            <h5 class="card-header">File input</h5>
            <div class="card-body">

              <BasicFileInputs />

            </div>
          </div>
        </Col>
        <Col>

          <div class="card mb-4">
            <h5 class="card-header">Range</h5>
            <div class="card-body">

              <BasicRange />

            </div>
          </div>

        </Col>
      </Row>

    </Layout>
  )
}

export default BasicInputs;
