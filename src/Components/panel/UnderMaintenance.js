import React from "react";

import '../../assets/vendor/css/pages/page-misc.css'
import { Link } from "react-router-dom";

function UnderMaintenance() {
    return (
        <>
            <div class="container-xxl container-p-y">
                <div class="misc-wrapper">
                    <h2 class="mb-2 mx-2">Under Maintenance!</h2>
                    <p class="mb-4 mx-2">Sorry for the inconvenience but we're performing some maintenance at the moment</p>
                    <Link to="/" class="btn btn-primary">Back to home</Link>
                    <div class="mt-4">
                        <img
                            src={require('../../assets/img/illustrations/girl-doing-yoga-light.png')}
                            alt="girl-doing-yoga-light"
                            width="500"
                            class="img-fluid"
                            data-app-dark-img="illustrations/girl-doing-yoga-dark.png"
                            data-app-light-img="illustrations/girl-doing-yoga-light.png" />
                    </div>
                </div>
            </div>
            {/* <!-- /Under Maintenance --> */}
        </>
    )
}

export default UnderMaintenance