import React from "react";

function BasicRange() {
    return (
        <>
            <div class="mb-3">
                <label for="formRange1" class="form-label">Example range</label>
                <input type="range" class="form-range" id="formRange1" />
            </div>
            <div class="mb-3">
                <label for="disabledRange" class="form-label">Disabled range</label>
                <input type="range" class="form-range" id="disabledRange" disabled />
            </div>
            <div class="mb-3">
                <label for="formRange2" class="form-label">Min and max</label>
                <input type="range" class="form-range" min="0" max="5" id="formRange2" />
            </div>
            <div>
                <label for="formRange3" class="form-label">Steps</label>
                <input type="range" class="form-range" min="0" max="5" step="0.5" id="formRange3" />
            </div>
        </>
    )
}
export default BasicRange;