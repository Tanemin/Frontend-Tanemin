import React from 'react';
interface InputPropsItem {
  field: string;
  name: string;
  id: string;
  type: string;
}

export default function Input(props: InputPropsItem) {
  const { field, name, id, type } = props;
  return (
    <>
      <div className="form-group">
        <label className="control-label">{field}</label> <br />
        <input className="form-control" name={name} id={id} type={type} />
      </div>
    </>
  );
}
