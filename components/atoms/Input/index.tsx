import React from 'react';
interface InputPropsItem {
  field: string;
  name: string;
  id: string;
  type: string;
  value: any;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputPropsItem) {
  const { field, name, id, type, value, changeInput } = props;
  return (
    <>
      <div className="form-group">
        <label className="control-label">{field}</label> <br />
        <input
          className="form-control"
          name={name}
          id={id}
          value={value}
          onChange={changeInput}
          type={type}
        />
      </div>
    </>
  );
}
