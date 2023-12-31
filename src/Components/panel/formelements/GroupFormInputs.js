import React from "react";

function GroupFormInputs() {
    return (
        <>
            <div class="input-group">
                <span class="input-group-text" id="basic-addon11">@</span>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon11" />
            </div>

            <div class="form-password-toggle">
                <label class="form-label" for="basic-default-password12">Password</label>
                <div class="input-group">
                    <input
                        type="password"
                        class="form-control"
                        id="basic-default-password12"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="basic-default-password2" />
                    <span id="basic-default-password2" class="input-group-text cursor-pointer"
                    ><i class="bx bx-hide"></i
                    ></span>
                </div>
            </div>

            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon13" />
                <span class="input-group-text" id="basic-addon13">@example.com</span>
            </div>

            <div class="input-group">
                <span class="input-group-text" id="basic-addon14">https://example.com/users/</span>
                <input
                    type="text"
                    class="form-control"
                    placeholder="URL"
                    id="basic-url1"
                    aria-describedby="basic-addon14" />
            </div>

            <div class="input-group">
                <span class="input-group-text">$</span>
                <input
                    type="number"
                    class="form-control"
                    placeholder="Amount"
                    aria-label="Amount (to the nearest dollar)" />
                <span class="input-group-text">.00</span>
            </div>

            <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea" placeholder="Comment"></textarea>
            </div>
        </>
    )
}

export default GroupFormInputs;