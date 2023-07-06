import { useRef } from "react";
import { useButton, type AriaButtonProps } from "react-aria";

export function CardButton(props: AriaButtonProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  props.children
  const { buttonProps } = useButton(props, ref);
  const { children } = props;
  return (
    <div {...buttonProps}>
      {children}
    </div>
  );
}
