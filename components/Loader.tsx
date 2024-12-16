'use client';
import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/looder.svg"
        alt="Loader"
        width={32}
        height={32}
        className="animate-spin"
      />
      <div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
