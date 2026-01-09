import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SignatureServices from '@/components/SignatureServices';
import Treatments from '@/components/Treatments';
import ServicesMenu from '@/components/ServicesMenu';
import FeaturedVideos from '@/components/FeaturedVideos';
import Gallery from '@/components/Gallery';
import Locations from '@/components/Locations';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <SignatureServices />
      <Treatments />
      <ServicesMenu />
      <FeaturedVideos />
      <Gallery />
      <Locations />
      <Services />
      <CallToAction />
      <Footer />
    </main>
  );
}
