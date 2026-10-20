import ArtGallery from "../components/ArtGallery";
import Header from "../components/Header";

export default function ArtPage() {
  return (
    <>
      <Header text2="Art" />
      <main className="min-h-screen bg-[#f1f2f5] px-6 py-7 text-[#10234a] md:px-12">
        <ArtGallery />
      </main>
    </>
  );
}
