import { Link } from "react-router-dom";
import livecomfor from "../../assets/imgs/home.jpg";
import electronics from "../../assets/imgs/electron.jpg";
import skinCare from "../../assets/imgs/skin.jpg";
import kitchen from "../../assets/imgs/kitchen.jpg";
import {
  ComfortableSec,
  Creativeprod,
  Footer,
  ProudProducts,
  Trending,
} from "../pages.jsx";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4" id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 h-64 md:h-80 lg:h-96 group">
            <Link to="/categories/livecomfortably" className="block h-full">
              <div className="relative h-full overflow-hidden">
                <img
                  src={livecomfor}
                  alt="Live Comfortably"
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
                />
                <p className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2">
                  Live Comfortably
                </p>
              </div>
            </Link>
          </div>

          <div className="h-64 md:h-80 lg:h-96 group">
            <Link to="/categories/skincare" className="block h-full">
              <div className="relative h-full overflow-hidden">
                <img
                  src={skinCare}
                  alt="Skincare"
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
                />
                <p className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2">
                  Skincare
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-[calc(32rem/2-0.5rem)] md:h-[calc(40rem/2-0.5rem)] lg:h-[calc(24rem-0.5rem)] group">
              <Link to="/categories/kitchen" className="block h-full">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={kitchen}
                    alt="Kitchen"
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
                  />
                  <p className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2">
                    Kitchen
                  </p>
                </div>
              </Link>
            </div>
            <div className="h-[calc(32rem/2-0.5rem)] md:h-[calc(40rem/2-0.5rem)] lg:h-[calc(24rem-0.5rem)] group">
              <Link to="/categories/electronics" className="block h-full">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={electronics}
                    alt="Electronics"
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
                  />
                  <p className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2">
                    Electronics
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProudProducts />
      <Creativeprod />
      <Trending />
      <ComfortableSec />
      <Footer />
      {/* <Shop /> */}
    </>
  );
};

export default Home;
