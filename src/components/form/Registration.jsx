/* eslint-disable no-unused-vars */
import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Field from '../Field';
import FieldSet from '../FieldSet';
import NumberInput from './NumberInput';

export default function Registration ()
{
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        control,
    } = useForm();

    const { fields, append, remove } = useFieldArray( {
        name: "socials", control,  
    } )
    
    const submitForm = ( formData ) =>
    {
        console.log( formData )
        // const user = { email: 'ami@ami.com', password: '12345678' }
        
        // const found = formData.email === user.email && formData.password === user.password;
        // if ( !found )
        // {
        //     setError( "root.random", {
        //         message: `user ${formData.email} not found!!`,
        //         type: "random"
        //     } )
        // }

    };
    
    return (
        <div>
            <form onSubmit={ handleSubmit( submitForm ) } className="flex flex-col gap-3 bg-violet-300 p-2 rounded-sm shadow-md hover:shadow">
                <FieldSet label="Registration Details">
                    <Field label={ "Picture" } error={ errors.picture }>
                        <input
                            { ...register( "picture", {
                                required: "user photo is required",
                                
                            } ) }
                            className={ `p-2 border box-border rounded-md ${errors.password ? "border-red-500" : "border-green-500"}` }
                            name="picture"
                            type="file"
                            id="picture"
                        />
                    </Field>
                    <Field label={ "Email" } error={ errors.email }>
                        <input
                            { ...register( 'email', { required: "must enter valid email address" } ) }
                            className={ `p-2 border box-border rounded-md ${errors.email ? "border-red-500" : "border-green-500"}` }
                            name="email"
                            type="email"
                            id="email"
                        />
                    </Field>
                    <Field label={ "Password" } error={ errors.password }>
                        <input
                            { ...register( "password", {
                                required: "password is required",
                                minLength: {
                                    value: 8,
                                    message: "must 8 or more char!!"
                                }
                            } ) }
                            className={ `p-2 border box-border rounded-md ${errors.password ? "border-red-500" : "border-green-500"}` }
                            name="password"
                            type="password"
                            id="password"
                        />
                    </Field>
                    <Field label={ "Name" } error={ errors.Uname }>
                        <input
                            { ...register( "Uname", {
                                required: "user name is required",
                                // minLength: {
                                //     value: 8,
                                //     message: "must 8 or more char!!"
                                // }
                            } ) }
                            className={ `p-2 border box-border rounded-md ${errors.Uname ? "border-red-500" : "border-green-500"}` }
                            name="Uname"
                            type="text"
                            id="Uname"
                        />
                        
                    </Field>
                    <Field label={ "Age" } error={ errors.age }>
                        {/* <input
                            { ...register( "age", {
                                require: "age is required",
                                max: {
                                    value: 100,
                                    message: "age must be under 100 yrs"
                                }
                            } ) }
                            className={ `p-2 border box-border rounded-md ${errors.age ? "border-red-500" : "border-green-500"}` }
                            name="age"
                            type="number"
                            id="age"
                        /> */}
                        <Controller
                            name="age"
                            defaultValue={0}
                            control={ control }
                            render={ ( { field: { ref, ...field } } ) =>
                            (
                                <NumberInput
                                    id="age"
                                    className={
                                        `p-2 border box-border rounded-md ${errors.age ? "border-red-500" : "border-green-500"}`
                                    }
                                    {...field}
                                />
                            )}
                            rules={ {
                                max: {
                                    value: 100,
                                    message: "age must be under 100 yrs"
                                }
                            }}
                        />
                    </Field>
                    
                    {
                        errors.root && ( <div className="text-red-500 py-3">
                            { errors?.root?.random.message }
                        </div> )
                    }
                </FieldSet>
                <FieldSet label={ "Social Links" }>
                    {
                        fields.map( ( field, index ) => (
                            <div
                                className="flex flex-col justify-between items-center w-max"
                                key={field.id}
                            >
                                <Field label={ "users social account name" }>
                                    
                                    <input
                                        {...register(`social[${index}].name`)}
                                        className="p-2 border box-border rounded border-yellow-500"
                                        type="text"
                                        id={ `social[${index}].name` }
                                        name={`social[${index}].name`}
                                    />
                                </Field>
                                <Field label={ "users social account link" }>
                                    
                                    <input
                                        {...register(`social[${index}].url`)}
                                        className="p-2 border box-border rounded border-yellow-500"
                                        type="text"
                                        id={ `social[${index}].url` }
                                        name={`social[${index}].url`}
                                    />
                                </Field>
                                <button
                                    className='bg-red-500 py-1 px-2 rounded-md my-1 text-sm text-white font-mono'
                                    onClick={ () => remove( index ) }>
                                    Remove
                                </button>
                            </div>
                        ))
                    }
                    <button
                        className=" bg-blue-500 text-white w-[200px] rounded-sm px-2 my-2 p-1"
                        onClick={()=> append({name:"", url:""})}
                    >
                        Add social links!
                    </button>
                </FieldSet>

                <Field>
                    <button
                        // type="submit"
                        className="p-2 bg-green-600 text-white rounded-sm">
                        Register!
                    </button>
                </Field>
            </form>
        </div>
    );
}
