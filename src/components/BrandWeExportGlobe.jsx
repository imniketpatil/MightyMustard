import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "apple",
  "samsung",
  "google",
  "oneplus",
  "xiaomi",
  "oppo",
  "vivo",
  "huawei",
  "nokia",
  "sony",
  "lg",
  "motorola",
  "asus",
  "lenovo",
  "honor",
  "blackberry",

  "panasonic",
];

export function BrandWeExportGlobe() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20  ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
