import React from "react";
import Image from "next/image";
export default function MyProfilepic() {
  return (
    <section className="w-full max-auto">
      <Image
        className=""
        src="/images/apple.jpg"
        width={200}
        height={200}
        alt="apple"
        priority={true}
      />
    </section>
  );
}
