import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/manually-opt-img.jpg"
      alt="Manually optimized image"
      width={1000}
      height={750}
    />
  );
}
