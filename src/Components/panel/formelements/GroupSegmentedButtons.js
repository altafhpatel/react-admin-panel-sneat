import React from "react";

function GroupSegmentedButtons() {
    return (
        <>
            <div class="input-group">
                <button type="button" class="btn btn-outline-primary">Action</button>
                <button
                    type="button"
                    class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                </ul>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Text input with segmented dropdown button" />
            </div>

            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    aria-label="Text input with segmented dropdown button" />
                <button type="button" class="btn btn-outline-primary">Action</button>
                <button
                    type="button"
                    class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                </ul>
            </div>
        </>
    )
}
export default GroupSegmentedButtons;