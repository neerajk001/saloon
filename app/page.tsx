import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Treatments from '@/components/Treatments';
import ServicesMenu from '@/components/ServicesMenu';
import FeaturedVideos from '@/components/FeaturedVideos';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Locations from '@/components/Locations';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Treatments />
      <ServicesMenu />
      <FeaturedVideos />
      <Gallery />
      <Reviews />
      <Locations />
      <CallToAction />
      <Footer />
    </main>
  );
}
