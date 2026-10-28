import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
};

export function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <div className="project-parallax relative h-[88%] rounded-[2.2rem] bg-[#1c1c1f] p-1.75 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-700 ease-expo group-hover:scale-105">
      <span className="absolute -left-0.75 top-[18%] h-[7%] w-0.75 rounded-l bg-[#2a2a2e]" />
      <span className="absolute -left-0.75 top-[28%] h-[11%] w-0.75 rounded-l bg-[#2a2a2e]" />
      <span className="absolute -right-0.75 top-[24%] h-[14%] w-0.75 rounded-r bg-[#2a2a2e]" />
      <div className="relative aspect-481/872 h-full overflow-hidden rounded-[1.75rem] bg-ink">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 20vw, 45vw"
          className="object-cover object-top"
        />
        <span className="absolute left-1/2 top-[1.6%] h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}
