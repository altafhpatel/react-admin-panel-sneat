import React from "react";

function GroupButtonsDropdowns() {
    return (
        <>
            <div class="input-group">
                <button class="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
                <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1" />
            </div>

            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2" />
                <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
            </div>

            <div class="input-group">
                <button class="btn btn-outline-primary" type="button">Button</button>
                <button class="btn btn-outline-primary" type="button">Button</button>
                <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="Example text with two button addons" />
            </div>

            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username with two button addons" />
                <button class="btn btn-outline-primary" type="button">Button</button>
                <button class="btn btn-outline-primary" type="button">Button</button>
            </div>

            <div class="input-group">
                <button
                    class="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown
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
                <input type="text" class="form-control" aria-label="Text input with dropdown button" />
            </div>

            <div class="input-group">
                <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                <button
                    class="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown
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

            <div class="input-group">
                <button
                    class="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">Action before</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Another action before</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                </ul>
                <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons" />
                <button
                    class="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown
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

export default GroupButtonsDropdowns;