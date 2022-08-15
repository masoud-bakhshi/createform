import React, {useState, useCallback} from "react";

const Select = () => {
  const [options, setOptions] = useState([]);
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const handleTextChange = useCallback(changeEvent => {
    setText(changeEvent.currentTarget.value);
  }, [setText]);

  const handleValueChange = useCallback(changeEvent => {
    setValue(changeEvent.currentTarget.value);
  }, [setValue]);

  const handleSubmit = useCallback(submitEvent => {
    submitEvent.preventDefault();

    setOptions([
      ...options,
      {
        key: window.crypto.randomUUID(),
        text,
        value
      }
    ]);
  }, [text, value, options, setOptions]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">
            Text
          </label>
          <input id="text" type="text" value={text} onChange={handleTextChange} />
        </div>
        <div>
          <label htmlFor="value">
            Value
          </label>
          <input id="value" type="text" value={value} onChange={handleValueChange} />
        </div>
        <button type="submit">
          Add
        </button>
      </form>
      <select>
        {options.map(currentOption => (
          <option key={currentOption.key} value={currentOption.value}>
            {currentOption.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;