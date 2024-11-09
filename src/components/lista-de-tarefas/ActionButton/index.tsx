import { IconProps } from "@radix-ui/react-icons/dist/types";
import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

interface ActionButtonProps extends ComponentProps<"button"> {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export const ActionButton = ({ Icon, className }: ActionButtonProps) => {
  return (
    <button>
      <Icon className={`${className}`} />
    </button>
  );
};
