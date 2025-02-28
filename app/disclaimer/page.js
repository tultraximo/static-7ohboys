import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-sm">
      <nav className="mb-6">
        <Link href="/" className="mr-4 text-green-900 font-bold text-2xl">Home</Link>
        <Link href="/about" className="mr-4 text-green-900 font-bold text-2xl">About</Link>
        <Link href="/faq" className="mr-4 text-green-900 font-bold text-2xl">FAQ</Link>
        <Link href="/contact" className="text-green-900 font-bold text-2xl">Contact</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Disclaimer</h1>
      <div className="space-y-4 text-gray-600">
        <p><strong>7ohBoys™ Disclaimer</strong></p>
        <p>Do not use this product if the seal is damaged or broken.</p>

        <p><strong>WARNING:</strong></p>
        <p>This extract contains highly concentrated active ingredients, making it far more potent than unprocessed botanical materials. Exercise extreme caution. Consult a healthcare professional prior to use. Reports of adverse effects from similar extracts include seizures, liver damage, withdrawal, addiction, and potentially fatal outcomes. Visit the FDA’s website for additional details on these risks.</p>
        <p>Use this product only if you have prior experience with non-extracted botanical products and have had no negative reactions. Avoid use for more than one consecutive day or alongside other similar products. Combining this extract with medications, vitamins, nicotine, alcohol, herbal supplements, or other substances may lead to hazardous interactions. Failure to heed these warnings could result in severe health consequences.</p>
        <p>Do not use if you are pregnant, planning pregnancy, or breastfeeding. Avoid if you have blood disorders, liver or kidney conditions, high blood pressure, heart disease, nervous system disorders, or any other health issues.</p>
        <p>This product is not suitable for use while driving, operating machinery, or performing tasks requiring full focus. If you experience side effects, stop use immediately and seek medical help.</p>

        <p><strong>Age Restriction:</strong></p>
        <p>This product is not to be sold or given to anyone under 21 years old. Keep out of children’s reach. Intended solely for responsible adult use.</p>

        <p><strong>Usage Limitation:</strong></p>
        <p>Not recommended for prolonged or repeated use, including with other similar products. Sold exclusively for external and botanical preparation purposes.</p>

        <p><strong>DISCLAIMER:</strong></p>
        <p>The Food and Drug Administration has not evaluated this product, and it is not intended for human consumption. It is not designed to diagnose, treat, cure, or prevent any disease. By purchasing or using this product, you accept full responsibility for any adverse effects. 7ohBoys™ is not liable for misuse, mishandling, or unauthorized use. The manufacturer and seller bear no responsibility for injury or harm resulting from its use or misuse.</p>

        <p><strong>Warnings:</strong></p>
        <p>Speak with your doctor before use if pregnant, nursing, managing a medical condition, or taking medications. Not for those under 18. May cause drowsiness—avoid driving or operating heavy machinery after use. Do not combine with other drugs, alcohol, or drowsiness-inducing substances. Stop use and consult a doctor if adverse reactions occur. Keep away from children and pets.</p>

        <p><strong>Shipping Restrictions:</strong></p>
        <p>Shipping is unavailable to Alabama, Arkansas, Indiana, Rhode Island, and Wisconsin, as well as specific counties: Sarasota County (Florida), San Diego (California), Oceanside (California), Alton (Illinois), Jerseyville (Illinois), Edwardsville County (Illinois), Columbus (Mississippi), Union County (Mississippi), Ascension (Louisiana), Franklin (Louisiana), and Rapides (Louisiana).</p>

        <p><strong>California Proposition 65 Warning:</strong></p>
        <p>This product may contain chemicals known to California to cause cancer, birth defects, or reproductive harm. Learn more at <a href="http://www.P65Warnings.ca.gov" className="text-blue-600 hover:underline">www.P65Warnings.ca.gov</a>.</p>

        <p><strong>Arbitration Clause (Texas):</strong></p>
        <p>Any disputes or claims related to this product, including its use, purchase, or alleged harm, must be resolved through binding arbitration in Texas, following American Arbitration Association rules. By purchasing or using this product, you waive your right to court proceedings, jury trials, or class actions.</p>

        <p><strong>INSTRUCTIONS:</strong></p>
        <p>Avoid use if you have a serious medical condition or take prescription drugs. Do not mix with medications, alcohol, vitamins, herbal supplements, or other substances. Always consult a healthcare professional about potential risks and interactions before use. Do not repackage for retail or alter this packaging or labeling.</p>
      </div>
    </div>
  );
}
