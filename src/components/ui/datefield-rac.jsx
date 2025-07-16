import {
  composeRenderProps,
  DateField as DateFieldRac,
  DateInput as DateInputRac,
  DateSegment as DateSegmentRac,
  TimeField as TimeFieldRac,
} from "react-aria-components";

import { cn } from "@/lib/utils"

function DateField(
  {
    className,
    children,
    ...props
  }
) {
  return (
    <DateFieldRac
      className={composeRenderProps(className, (className) => cn(className))}
      {...props}>
      {children}
    </DateFieldRac>
  );
}

function TimeField(
  {
    className,
    children,
    ...props
  }
) {
  return (
    <TimeFieldRac
      className={composeRenderProps(className, (className) => cn(className))}
      {...props}>
      {children}
    </TimeFieldRac>
  );
}

function DateSegment({
  className,
  ...props
}) {
  return (
    <DateSegmentRac
      className={composeRenderProps(className, (className) =>
        cn(
          "text-foreground data-focused:bg-accent data-invalid:data-focused:bg-destructive data-focused:data-placeholder:text-foreground data-focused:text-foreground data-invalid:data-placeholder:text-destructive data-invalid:text-destructive data-placeholder:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 inline rounded p-0.5 caret-transparent outline-hidden data-disabled:cursor-not-allowed data-disabled:opacity-50 data-invalid:data-focused:text-white data-invalid:data-focused:data-placeholder:text-white data-[type=literal]:px-0",
          className
        ))}
      {...props}
      data-invalid />
  );
}

const dateInputStyle =
  "relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:ring-[3px] data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive"

function DateInput({
  className,
  unstyled = false,
  ...props
}) {
  return (
    <DateInputRac
      className={composeRenderProps(className, (className) =>
        cn(!unstyled && dateInputStyle, className))}
      {...props}>
      {(segment) => <DateSegment segment={segment} />}
    </DateInputRac>
  );
}

export { DateField, DateInput, DateSegment, TimeField, dateInputStyle }
