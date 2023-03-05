import React, { useState } from "react";

function FormBuilder() {
  const [formFields, setFormFields] = useState([]);
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("text");

  function addField() {
    setFormFields([...formFields, { name: fieldName, type: fieldType }]);
    setFieldName("");
    setFieldType("text");
  }

  return (
    <div>
      <h2>Form Builder</h2>
      <div>
        <label htmlFor="fieldName">Field Name:</label>
        <input
          type="text"
          id="fieldName"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fieldType">Field Type:</label>
        <select
          id="fieldType"
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="select">Select</option>
          <option value="date">Date</option>
        </select>
      </div>
      <button onClick={addField}>Add Field</button>
      <h3>Form Preview</h3>
      <form>
        {formFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name}>{field.name}</label>
            {field.type === "text" && (
              <input type="text" id={field.name} name={field.name} />
            )}
            {field.type === "email" && (
              <input type="email" id={field.name} name={field.name} />
            )}
            {field.type === "number" && (
              <input type="number" id={field.name} name={field.name} />
            )}
            {field.type === "checkbox" && (
              <input type="checkbox" id={field.name} name={field.name} />
            )}
            {field.type === "radio" && (
              <div>
                <input
                  type="radio"
                  id={field.name}
                  name={field.name}
                  value="option1"
                />
                <label htmlFor={field.name}>Option 1</label>
                <input
                  type="radio"
                  id={field.name}
                  name={field.name}
                  value="option2"
                />
                <label htmlFor={field.name}>Option 2</label>
              </div>
            )}
            {field.type === "select" && (
              <div>
                <label htmlFor={field.name}>Select an option:</label>
                <select id={field.name} name={field.name}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            )}
            {field.type === "date" && (
              <div>
                <label htmlFor={field.name}>Release date:</label>
                <input type="date" id="birthday" name="birthday" />
              </div>
            )}
          </div>
        ))}
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default FormBuilder;
