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
      <div className="m-3 sm:m-14 xl:mx-20 xl:my-14 2xl:mx-28 2xl:my-18">
        <FIrstSectionComponent />
        <SecondComponent />
      </div>
      <ThirdSectionComponent />
      <FourthSectionComponent />
      <div className="m-3 sm:m-14 xl:mx-20 xl:my-14 2xl:mx-28 2xl:my-18">
        <FifthComponent />
      </div>
      <SixSectionComponent />
      <SeventhSectionComponent />
      <Footer />
    </div>
  );
}

export default Home;
