import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { Statistics } from '@/components/Statistics';
import { Reliability } from '@/components/Reliability';
import { SoftwareFeatures } from '@/components/SoftwareFeatures';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Statistics />
        <Reliability />
        <SoftwareFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
