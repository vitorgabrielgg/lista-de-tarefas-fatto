import { Input } from "@/components/ui/input";
import React from "react";

interface InputFieldProps {
  name: string;
  placeholder?: string;
  label: string;
  type: string;
}

export const InputField = ({
  label,
  name,
  placeholder,
  type,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium text-jet">
        {label}
      </label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`bg-jet border-none rounded placeholder:text-silver text-silver ${
          type === "date" && "w-[140px]"
        }`}
      />
    </div>
  );
};
