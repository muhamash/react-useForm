/* eslint-disable no-unused-vars */
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Field from '../Field';
import FieldSet from '../FieldSet';

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
        const user = { email: 'ami@ami.com', password: '12345678' }
        
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
                                require: "password is required",
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
                                require: "user name is required",
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
                        <input
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
                                className="flex justify-between items-center w-max"
                                key={field.id}
                            >
                                <Field label={"users social account"}>
                                    <input
                                        {...register(`social[${index}].url`)}
                                        className="p-2 border box-border rounded border-yellow-500"
                                        type="text"
                                        id={ `social[${index}].url` }
                                        name={`social[${index}].url`}
                                    />
                                </Field>
                            </div>
                        ))
                    }
                    <button
                        className="text-black bg-slate-200 rounded-sm px-2 py-1"
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
