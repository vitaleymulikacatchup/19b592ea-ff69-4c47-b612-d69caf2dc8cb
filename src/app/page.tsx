"use client";

import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",  
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759758568298-3c7f64fc.jpg"
          logoAlt="MemePulse Logo"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
          buttonText="Buy MemePulse"
          className="p-5"
          buttonClassName="bg-primary text-white"
        />
      </div>
      <div className="scroll-mt-24" id="hero" data-section="hero">
        <SimpleHero
          title="Welcome to MemePulse"
          description="Join the community and start your journey with clear buying steps and vibrant visuals!"
          primaryButtonText="Get Started"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759758566304-68896b45.jpg"
          backgroundImageAlt="A colorful desert landscape illustrating the fun side of MemePulse"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemePulse is a playful memecoin with a transparent community vibe. We provide clear steps to get involved and grow your investment!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Transparent setup that ensures community-first values and sustainability."
          tokenData={[
            { value: "1000M", description: "Total Supply" },
            { value: "500M", description: "Circulating Supply" },
            { value: "200M", description: "Reserved for Development" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <GradientFooter
          items={[
            { label: "Privacy Policy", onClick: () => {} },
            { label: "Terms of Service", onClick: () => {} },
            { label: "Contact Us", onClick: () => {} },
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759758568298-3c7f64fc.jpg"
          logoAlt="MemePulse Logo"
          copyrightText="© 2023 MemePulse. All rights reserved."
        />
      </div>
   </SiteThemeProvider>
  );
}
