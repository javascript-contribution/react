import React from "react";
import { useForm } from "react-hook-form";


export function Input({ register, name, ...rest }: any) {
    return <input {...register(name)} {...rest} />;
  }
  
  export function Select({ register, options, name, ...rest }: any) {
    return (
      <select {...register(name)} {...rest}>
        {options.map((value: any) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
  


export default function Form({ defaultValues, children, onSubmit }: any) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name
              }
            })
          : child;
       })}
    </form>
  );
}


