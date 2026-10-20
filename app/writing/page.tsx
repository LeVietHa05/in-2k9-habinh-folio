import Header from "../components/Header";
import WritingAccordion from "../components/WritingAccordion";

export default function WritingPage() {
  return (
    <>
      <Header text2="Writing" />
      <main className="min-h-screen bg-[#f1f2f5] px-6 py-7 text-[#10234a] md:px-12">
        <WritingAccordion />
      </main>
    </>
  );
}
