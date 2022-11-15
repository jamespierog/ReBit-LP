import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>ReBit - Reimagine Bitcoin</title>
        <meta
          name="Pay Anyone from Anywhere."
          content="Make and receive international payments from the comfort of your e-wallet, bank, or Bitcoin wallet."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
         <SectionTitle
            title="For Personal Use"
          >
          </SectionTitle>
          <Benefits data={benefitOne} />
          <SectionTitle
            title="For Businesses"
          >
          </SectionTitle>
          <Benefits imgPos="right" data={benefitTwo} />
          <SectionTitle
            title="For Traders"
          >
          </SectionTitle>
          <Benefits imgPos="left" data={benefitThree} />
            <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
