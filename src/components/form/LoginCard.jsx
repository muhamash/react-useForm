/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import Field from '../Field';
import FieldSet from '../FieldSet';

export default function LoginCard ()
{
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        
    } = useForm();

    const submitForm = ( formData ) =>
    {
        console.log( formData )
        const user = { email: 'ami@ami.com', password: '12345678' }
        
        const found = formData.email === user.email && formData.password === user.password;
        if ( !found )
        {
            setError( "root.random", {
                message: `user ${formData.email} not found!!`,
                type: "random"
            })
        }

    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-3 bg-amber-300 p-2 rounded-sm shadow-md hover:shadow">
                <FieldSet label="Enter login details">
                    <Field label={ "Email" } error={errors.email}>
                        <input
                            {...register('email', {required:"must enter valid email address"})}
                            className={`p-2 border box-border rounded-md ${errors.email ? "border-red-500" : "border-green-500"}`}
                            name="email"
                            type="email"
                            id="email"
                        />
                    </Field>
                    <Field label={ "Password" } error={errors.password}>
                        <input
                            { ...register( "password", {require:"password is required",
                                minLength: {
                                    value: 8,
                                    message: "must 8 or more char!!"
                                }
                            })}
                            className={`p-2 border box-border rounded-md ${errors.password ? "border-red-500" : "border-green-500"}`}
                            name="password"
                            type="password"
                            id="password"
                        />
                    </Field>
                    {
                        errors.root && (<div className="text-red-500 py-3">
                        {errors?.root?.random.message}
                    </div>)
                    }
                </FieldSet>
                <Field>
                    <button
                        // type="submit"
                        className="p-2 bg-slate-200 rounded-sm">
                        Login
                    </button>
                </Field>
            </form>
        </div>
    );
}
