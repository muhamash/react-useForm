/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const FieldSet = ({label, children}) => {
  return (
    <fieldset className="m-2 border-none p-0">
      { label && <legend className="text-md font-bold mb-2 text-violet-700">{ label }</legend> }
      <div className="flex flex-col justify-between self-start">{ children }</div>
    </fieldset>
  );
}

export default FieldSet;