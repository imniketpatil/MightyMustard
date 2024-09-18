import Globe from "@/components/magicui/globe";
import BlurIn from "./magicui/blur-in";

export function ImportGlobe() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg   p-4 md:px-20 md:py-40 md:shadow-2xl">
      {/* Text Section */}

      <BlurIn
        className="pointer-events-none z-10 h-full w-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-600 bg-clip-text text-center text-4xl lg:text-5xl font-bold leading-tight text-transparent  animate-fadeIn"
        word="We Export To"
      />

      {/* Globe Component */}
      <Globe className="absolute top-16 md:top-28 scale-95 hover:scale-100 transition-transform duration-500 ease-in-out" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 h-full " />
    </div>
  );
}
