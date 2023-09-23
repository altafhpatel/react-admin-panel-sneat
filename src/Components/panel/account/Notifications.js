import React from "react";
import { Row, Col } from 'react-bootstrap';


function Notifications() {
    return (
        <>
            <Row>
                <Col class="col-md-12">
                    
                    <div class="card">
                        {/* <!-- Notifications --> */}
                        <h5 class="card-header">Recent Devices</h5>
                        <div class="card-body">
                            <span
                            >We need permission from your browser to show notifications.
                                <span class="notificationRequest"><span class="fw-medium">Request Permission</span></span></span
                            >
                            <div class="error"></div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless border-bottom">
                                <thead>
                                    <tr>
                                        <th class="text-nowrap">Type</th>
                                        <th class="text-nowrap text-center">✉️ Email</th>
                                        <th class="text-nowrap text-center">🖥 Browser</th>
                                        <th class="text-nowrap text-center">👩🏻‍💻 App</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-nowrap">New for you</td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck1" checked />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck2" checked />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck3" checked />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-nowrap">Account activity</td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck4" checked />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck5" checked />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck6" checked />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-nowrap">A new browser used to sign in</td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck7" checked />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck8" checked />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck9" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-nowrap">A new device is linked</td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck10" checked />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck11" />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check d-flex justify-content-center">
                                                <input class="form-check-input" type="checkbox" id="defaultCheck12" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-body">
                            <h6>When should we send you notifications?</h6>
                            <form action="javascript:void(0);">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <select id="sendNotification" class="form-select" name="sendNotification">
                                            <option selected>Only when I'm online</option>
                                            <option>Anytime</option>
                                        </select>
                                    </div>
                                    <div class="mt-4">
                                        <button type="submit" class="btn btn-primary me-2">Save changes</button>
                                        <button type="reset" class="btn btn-outline-secondary">Discard</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- /Notifications --> */}
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Notifications;