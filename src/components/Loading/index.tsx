import { LoaderCircle } from "lucide-react";

interface LoadingProps {
  className?: string;
}

export const Loading = ({ className }: LoadingProps) => {
  return (
    <div className="">
      <LoaderCircle className={`animate-spin mx-auto ${className}`} />
    </div>
  );
};
