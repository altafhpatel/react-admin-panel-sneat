import React from "react";

function BasicFloatlabel() {
    return (
        <>
            <div class="form-floating">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="John Doe"
                    aria-describedby="floatingInputHelp" />
                <label for="floatingInput">Name</label>
                <div id="floatingInputHelp" class="form-text">
                    We'll never share your details with anyone else.
                </div>
            </div>
        </>
    )
}

export default BasicFloatlabel