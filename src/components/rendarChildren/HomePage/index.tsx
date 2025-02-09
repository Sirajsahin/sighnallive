import NavbarComponent from "@/components/shared/NavbarComponent";
import FifthComponent from "./FifthComponent";
import FIrstSectionComponent from "./FIrstSectionComponent";
import Footer from "./Footer";
import FourthSectionComponent from "./FourthSectionComponent";
import SecondComponent from "./SecondComponent";
import SeventhSectionComponent from "./SeventhSectionComponent";
import SixSectionComponent from "./SixSectionComponent";
import ThirdSectionComponent from "./ThirdSectionComponent";

function Home() {
  return (
    <div>
      <NavbarComponent />

      {/* Wrapper for the first and second section */}
      <div className="mx-3 sm:mx-14 xl:mx-20 2xl:mx-28 my-14 sm:my-14 xl:my-14 2xl:my-18">
        <FIrstSectionComponent />
        <SecondComponent />
      </div>

      {/* Third and Fourth sections */}
      <ThirdSectionComponent />
      <FourthSectionComponent />

      {/* Wrapper for Fifth Section */}
      <div className="mx-3 sm:mx-14 xl:mx-20 2xl:mx-28 my-14 sm:my-14 xl:my-14 2xl:my-18">
        <FifthComponent />
      </div>

      {/* Remaining sections */}
      <SixSectionComponent />
      <SeventhSectionComponent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
