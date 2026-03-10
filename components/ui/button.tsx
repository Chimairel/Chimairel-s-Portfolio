import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border-2 border-border text-sm font-bold tracking-widest whitespace-nowrap outline-none select-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-100 ease-in-out [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 
          "bg-[#e0e0e0] text-black dark:bg-secondary dark:text-secondary-foreground shadow-[2px_2px_0px_0px_var(--color-border)] hover:bg-[#d0d0d0] dark:hover:bg-secondary/80 hover:shadow-[1px_1px_0px_0px_var(--color-border)] hover:translate-x-[1px] hover:translate-y-[1px] active:bg-[#c0c0c0] dark:active:bg-secondary/50 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]",
        
        outline:
          "bg-card text-foreground shadow-[2px_2px_0px_0px_var(--color-border)] hover:bg-[#f0f0f0] dark:hover:bg-secondary/50 hover:shadow-[1px_1px_0px_0px_var(--color-border)] hover:translate-x-[1px] hover:translate-y-[1px] active:bg-[#e0e0e0] dark:active:bg-secondary active:shadow-none active:translate-x-[2px] active:translate-y-[2px]",
        
        secondary:
          "bg-secondary text-secondary-foreground shadow-[2px_2px_0px_0px_var(--color-border)] hover:bg-secondary/80 hover:shadow-[1px_1px_0px_0px_var(--color-border)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]",
        ghost:
          "border-transparent hover:border-border hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[2px_2px_0px_0px_var(--color-border)] hover:bg-destructive/90 hover:shadow-[1px_1px_0px_0px_var(--color-border)] hover:translate-x-[1px] hover:translate-y-[1px]",
        link: "border-transparent text-foreground underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-11 px-6 py-3",
        xs: "h-7 px-2 text-xs",
        sm: "h-9 px-3 text-[0.8rem]",
        lg: "h-12 px-8 text-base",
        icon: "size-11",
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