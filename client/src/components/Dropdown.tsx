import React from 'react';

interface DropdownParams {
  name: string;
  label: string;
  options: string[];
  handleInputChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown = ({ name, label, options, handleInputChange }: DropdownParams) => {
  return (
    <div className="dropdown">
      <label htmlFor={name} className="dropdown-label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        onChange={handleInputChange}
        className="dropdown-select"
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
