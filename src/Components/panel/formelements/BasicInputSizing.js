import React from "react";

function BasicInputSizing() {
  return (
    <>
      <div class="mt-2 mb-3">
        <label for="largeInput" class="form-label">Large input</label>
        <input
          id="largeInput"
          class="form-control form-control-lg"
          type="text"
          placeholder=".form-control-lg" />
      </div>
      <div class="mb-3">
        <label for="defaultInput" class="form-label">Default input</label>
        <input id="defaultInput" class="form-control" type="text" placeholder="Default input" />
      </div>
      <div>
        <label for="smallInput" class="form-label">Small input</label>
        <input
          id="smallInput"
          class="form-control form-control-sm"
          type="text"
          placeholder=".form-control-sm" />
      </div>
      <hr />
      <div class="mt-2 mb-3">
        <label for="largeSelect" class="form-label">Large select</label>
        <select id="largeSelect" class="form-select form-select-lg">
          <option>Large select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="defaultSelect" class="form-label">Default select</label>
        <select id="defaultSelect" class="form-select">
          <option>Default select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div>
        <label for="smallSelect" class="form-label">Small select</label>
        <select id="smallSelect" class="form-select form-select-sm">
          <option>Small select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  )
}

export default BasicInputSizing;