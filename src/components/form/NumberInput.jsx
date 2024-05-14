/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function NumberInput ( { value, onChange, ...rest } )
{
    const handleChange = ( e ) =>
    {
        const value = e.target.valueAsNumber || 0;
        onChange( value );
    }
    return (
        <input
            type="number"
            min={ 0 }
            value={ value }
            onChange={ handleChange }
            { ...rest }
        />
    );
}
