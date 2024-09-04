import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedText() {
  return (
    <div className="py-[2rem] md:py-[6rem]">
      <VelocityScroll
        text="• Developer • Designer • Freelancer"
        nText="Developer • Designer • Freelancer •"
        default_velocity={2}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
}
