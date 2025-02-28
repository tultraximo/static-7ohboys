import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-sm">
      <nav className="mb-6">
        <Link href="/" className="mr-4 text-green-900 font-bold text-2xl">Home</Link>
        <Link href="/faq" className="mr-4 text-green-900 font-bold text-2xl">FAQ</Link>
        <Link href="/contact" className="text-green-900 font-bold text-2xl">Contact Us</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-gray-600">Offering the highest quality retail and wholesale 7oh tablets. Updates daily! Stay tuned for more!</p>
    </div>
  );
}
