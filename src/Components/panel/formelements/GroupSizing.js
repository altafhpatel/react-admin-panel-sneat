import React from "react";

function GroupSizing() {
    return (
        <>
            <div class="input-group input-group-lg">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Username" />
            </div>

            <div class="input-group">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Username" />
            </div>

            <div class="input-group input-group-sm">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Username" />
            </div>

        </>
    )
}
export default GroupSizing;