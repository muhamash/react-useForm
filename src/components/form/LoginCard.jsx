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
        handleSubmit
    } = useForm();

    const submitForm = ( formData ) =>
    {
        console.log(formData)
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-3 bg-amber-300 p-2 rounded-sm shadow-md hover:shadow">
                <FieldSet label="Enter login details">
                    <Field label={ "Email" }>
                        <input
                            {...register('email')}
                            className="p-2 border box-border rounded-md border-emerald-300"
                            name="email"
                            type="email"
                            id="email"
                        />
                    </Field>
                    <Field label={ "Password" }>
                        <input
                            {...register("password")}
                            className="p-2 border box-border rounded-md border-emerald-300"
                            name="password"
                            type="password"
                            id="password"
                        />
                    </Field>
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
