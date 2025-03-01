import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "Where do you ship?",
      answer: "This product is not available for shipping to Alabama, Arkansas, Indiana, Rhode Island, or Wisconsin. It’s also restricted in specific counties such as Sarasota County (Florida), San Diego (California), Oceanside (California), Alton (Illinois), Jerseyville (Illinois), Edwardsville County (Illinois), Columbus (Mississippi), Union County (Mississippi), Ascension (Louisiana), Franklin (Louisiana), and Rapides (Louisiana).",
    },
    {
      question: "What payment options are accepted?",
      answer: "CC Payment option coming very soon. Cashapp, Venmo, Zelle, Bitcoin for now...",
    },
    {
      question: "How will you ship?",
      answer: "All standard orders will go out USPS Priority or UPS Ground (our choice unless requested), samples will be USPS Ground Advantage.",
    },
    {
      question: "When will you ship?",
      answer: "All standard orders received by 10 am PST will go out same day.",
    },
    {
      question: "Express shipping available?",
      answer: "Case by case basis.",
    },
    {
      question: "How do we contact you?",
      answer: "Click the link above and send a message.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-sm">
      <nav className="mb-6">
        <Link href="/" className="mr-4 text-green-900 font-bold text-2xl">Home</Link>
        <Link href="/about" className="mr-4 text-green-900 font-bold text-2xl">About</Link>
        <Link href="/contact" className="mr-4 text-green-900 font-bold text-2xl">Contact</Link>
        <Link href="/disclaimer" className="mr-4 text-green-900 font-bold text-2xl">Disclaimer</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">FAQ</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h2 className="text-xl font-medium text-gray-700">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
