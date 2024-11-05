import { Input } from "@/components/ui/input";
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  name: "nomeTarefa" | "custoTarefa" | "dataLimiteTarefa";
  placeholder?: string;
  label: string;
  type: string;
  register: UseFormRegister<{
    nomeTarefa: string;
    custoTarefa: string;
    dataLimiteTarefa: string;
  }>;
  error: FieldError | undefined;
}

export const InputField = ({
  error,
  label,
  name,
  placeholder,
  type,
  register,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={name} className="font-medium text-jet">
        {label}
      </label>
      <Input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className={`bg-jet border-none rounded placeholder:text-silver text-silver ${
          type === "date" && "w-[140px]"
        }`}
        step="any"
      />

      {error && <p className="text-red-700">{error.message}</p>}
    </div>
  );
};
