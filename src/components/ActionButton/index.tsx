import { IconProps } from "@radix-ui/react-icons/dist/types";
import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

interface ActionButtonProps extends ComponentProps<"button"> {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export const ActionButton = ({
  Icon,
  className,
  onClick,
}: ActionButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon className={`${className}`} />
    </button>
  );
};
