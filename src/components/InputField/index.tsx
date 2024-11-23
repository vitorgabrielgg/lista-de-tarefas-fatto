import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
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
  value?: string | number;
}

export const InputField = ({
  error,
  label,
  name,
  placeholder,
  type,
  value,
  register,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState<string | number>(
    value ? value : ""
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="flex flex-col gap-1">
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
        onChange={handleChangeInput}
        value={value && inputValue}
      />

      {error && <p className="text-red-700 text-sm">{error.message}</p>}
    </div>
  );
};
