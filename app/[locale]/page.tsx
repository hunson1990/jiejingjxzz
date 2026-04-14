import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Advantages from "@/components/Advantages";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Equipment />
        <Capabilities />
        <Services />
        <Materials />
        <Advantages />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
