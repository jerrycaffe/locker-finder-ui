import React, { useState } from "react";

const SelectBtn = ({ list, name }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="select-container">
      <ul
        onClick={() => setOpen(!open)}
        className={`${open && "open"} faux-select`}
        data-selected-value="ted"
      >
        <li className="selected-option">
          <span>{name}</span>

          <ul className={`${open && "open"} options`}>
            {list.map((v, id) => (
              <li key={id}>{v}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SelectBtn;
