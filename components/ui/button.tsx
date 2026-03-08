import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border-2 border-border bg-background text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-none outline-none select-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 
          "bg-background text-foreground shadow-[4px_4px_0px_0px_currentColor] hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]",
        outline:
          "border-border bg-background hover:bg-foreground hover:text-background",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[4px_4px_0px_0px_currentColor] hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        ghost:
          "border-transparent hover:border-border hover:bg-foreground hover:text-background",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[4px_4px_0px_0px_currentColor] hover:bg-foreground hover:text-background hover:shadow-none",
        link: "border-transparent text-foreground underline-offset-4 hover:underline shadow-none",
      },
      size: {
        
        default: "h-10 gap-2 px-6",
        xs: "h-7 gap-1 px-2 text-xs",
        sm: "h-9 gap-1.5 px-3 text-[0.8rem]",
        lg: "h-12 gap-2 px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }