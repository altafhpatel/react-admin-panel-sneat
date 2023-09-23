import React from "react";
import { Link } from "react-router-dom";

import '../../assets/vendor/css/pages/page-misc.css'

function Error() {
    return (
        <>
            <div class="container-xxl container-p-y">
                <div class="misc-wrapper">
                    <h2 class="mb-2 mx-2">Page Not Found :(</h2>
                    <p class="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
                    <Link to="/" class="btn btn-primary">Back to home</Link>
                    <div class="mt-3">
                        <img
                            src={require('../../assets/img/illustrations/page-misc-error-light.png')}
                            alt="page-misc-error-light"
                            width="500"
                            class="img-fluid"
                            data-app-dark-img="illustrations/page-misc-error-dark.png"
                            data-app-light-img="illustrations/page-misc-error-light.png" />
                    </div>
                </div>
            </div>
            {/* <!-- /Error --> */}
        </>
    )
}

export default Error