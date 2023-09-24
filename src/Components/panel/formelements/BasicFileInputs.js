import React from "react";

function BasicFileInputs() {
    return (
        <>
            <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div>
                <label for="formFileDisabled" class="form-label">Disabled file input example</label>
                <input class="form-control" type="file" id="formFileDisabled" disabled />
            </div>
        </>
    )
}

export default BasicFileInputs;