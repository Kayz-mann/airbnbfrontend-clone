import React, {useState} from 'react'
import Select from "react-select";
import "./Dropdown.css";

function Dropdown() {

  const data = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


  const  [selectedValue, setSelectedValue] = useState(null);

  const handleChange = obj => {
    setSelectedValue(obj);
  }

  return (
    <div className="Dropdown">
      {/* Clue Mediator<br /> */}

      <Select 
      value={selectedValue}
      options={data}
      onChange={handleChange}
      className="drop-button"
      />

    <br />
    {/* <b>Selected Value</b> */}
      {/* <pre>{JSON.stringify(selectedValue, null, 2)}</pre> */}
    </div>
  )
}

export default Dropdown
