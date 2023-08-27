import Link from 'next/link';

/* @ts-ignore */
export default function Logo({ imageSrc }) {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img src={imageSrc} alt="NFTicks Logo" className="w-48 h-12 md:w-16 md:h-16 lg:w-48 lg:h-12 sm:w-16 sm:h-16" />
    </Link>
  );
}
