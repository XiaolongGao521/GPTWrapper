import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-[0.42rem] bg-foreground text-[13px] font-black italic leading-none text-background shadow-[0_0_30px_rgb(21_140_255_/_0.22)]",
        className,
      )}
      aria-hidden="true"
    >
      gw
    </span>
  );
}
