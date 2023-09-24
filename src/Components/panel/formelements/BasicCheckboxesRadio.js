import React from "react";

function BasicCheckboxesRadio() {
    return (
        <>
            <small class="text-light fw-medium">Checkboxes</small>
            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1"> Unchecked </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked />
                <label class="form-check-label" for="defaultCheck2"> Indeterminate </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" checked />
                <label class="form-check-label" for="defaultCheck3"> Checked </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="disabledCheck1" disabled />
                <label class="form-check-label" for="disabledCheck1"> Disabled Unchecked </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="disabledCheck2"
                    disabled
                    checked />
                <label class="form-check-label" for="disabledCheck2"> Disabled Checked </label>
            </div>
            <hr />
            <small class="text-light fw-medium">Radio</small>
            <div class="form-check mt-3">
                <input
                    name="default-radio-1"
                    class="form-check-input"
                    type="radio"
                    value=""
                    id="defaultRadio1" />
                <label class="form-check-label" for="defaultRadio1"> Unchecked </label>
            </div>
            <div class="form-check">
                <input
                    name="default-radio-1"
                    class="form-check-input"
                    type="radio"
                    value=""
                    id="defaultRadio2"
                    checked />
                <label class="form-check-label" for="defaultRadio2"> Checked </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="" id="disabledRadio1" disabled />
                <label class="form-check-label" for="disabledRadio1"> Disabled unchecked </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    value=""
                    id="disabledRadio2"
                    disabled
                    checked />
                <label class="form-check-label" for="disabledRadio2"> Disabled checkbox </label>
            </div>
            <hr />
            <small class="text-light fw-medium d-block">Inline Checkboxes</small>
            <div class="form-check form-check-inline mt-3">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label class="form-check-label" for="inlineCheckbox1">1</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label class="form-check-label" for="inlineCheckbox2">2</label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    disabled />
                <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
            </div>
            <hr />
            <small class="text-light fw-medium d-block">Inline Radio</small>
            <div class="form-check form-check-inline mt-3">
                <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1" />
                <label class="form-check-label" for="inlineRadio1">1</label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2" />
                <label class="form-check-label" for="inlineRadio2">2</label>
            </div>
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                    disabled />
                <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
            </div>
        </>
    )

}
export default BasicCheckboxesRadio;