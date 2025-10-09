"use client";

type imageLoaderProps = {
  src: string;
  width: number;
  quality: number;
};

export default function sanityImageLoader({
  src,
  width,
  quality = 75,
}: imageLoaderProps) {
  const dataset = "production";
  const url = new URL(`${src}/${dataset}/`);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", width.toString());
  if (quality) {
    url.searchParams.set("q", quality.toString());
  }
  return url.href;
}
