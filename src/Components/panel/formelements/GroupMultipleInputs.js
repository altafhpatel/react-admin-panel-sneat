import React from "react";

function GroupMultipleInputs() {
    return (
        <>
            <div class="input-group">
                <span class="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" class="form-control" />
                <input type="text" aria-label="Last name" class="form-control" />
            </div>

            <small class="text-light fw-medium d-block pt-3">Multiple addons</small>
            <div class="input-group">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)" />
            </div>

            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)" />
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
            </div>
        </>
    )
}
export default GroupMultipleInputs;