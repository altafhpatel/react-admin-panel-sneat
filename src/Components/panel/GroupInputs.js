import React from "react";
import { Row, Col } from 'react-bootstrap';
import Layout from "../Layout/Layout";

import GroupFormInputs from "./formelements/GroupFormInputs";
import GroupMergedInputs from "./formelements/GroupMergedInputs";
import GroupSizing from "./formelements/GroupSizing";
import GroupCheckboxRadio from "./formelements/GroupCheckboxRadio";
import GroupMultipleInputs from "./formelements/GroupMultipleInputs";
import GroupSpeechText from "./formelements/GroupSpeechText";
import GroupButtonsDropdowns from "./formelements/GroupButtonsDropdowns";
import GroupSegmentedButtons from "./formelements/GroupSegmentedButtons";
import GroupCustomSelect from "./formelements/GroupCustomSelect";
import GroupFileInputs from "./formelements/GroupFileInputs";

function InputGroups() {
    return (
        <Layout>
            <Row>
                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Basic</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">

                            <GroupFormInputs />

                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Merged</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">
                            <GroupMergedInputs />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Sizing & Shape</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">
                            <GroupSizing />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Checkbox and radio addons</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">

                            <GroupCheckboxRadio />

                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Multiple inputs & addon</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">
                            <small class="text-light fw-medium d-block">Multiple inputs</small>

                            <GroupMultipleInputs />

                        </div>
                    </div>
                </Col>

                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Speech To Text</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">

                            <GroupSpeechText />

                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Button with dropdowns & addons</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">

                            <GroupButtonsDropdowns />

                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="card mb-4">
                        <h5 class="card-header">Segmented buttons</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">

                            <GroupSegmentedButtons />

                        </div>
                    </div>

                    <div class="card mb-4">
                        <h5 class="card-header">Custom select</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">

                            <GroupCustomSelect />

                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div class="card">
                        <h5 class="card-header">Custom file input</h5>
                        <div class="card-body demo-vertical-spacing demo-only-element">
                            <GroupFileInputs />
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default InputGroups;
