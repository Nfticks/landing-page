import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img src="/images/nfticks.png" alt="NFTicks Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-48 lg:h-12" />
    </Link>
  );
}
