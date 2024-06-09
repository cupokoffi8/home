import React, { useEffect, useState } from "react";
import "./Home.css";
import Hours from "./Hours";
import "../Button.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeImg from "./Images/Home.JPG";
import Landing from "./Landing";
import Curve from "./Curve";

const POPUP_LOCAL_STORAGE_KEY = "popupShownBefore";

toast.configure();

export default function Home() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown before
    const popupShownBefore = localStorage.getItem(POPUP_LOCAL_STORAGE_KEY);

    // If the popup hasn't been shown before, show it and mark it as shown in local storage
    if (!popupShownBefore) {
      setTimeout(() => {
        setTimedPopup(true);
        localStorage.setItem(POPUP_LOCAL_STORAGE_KEY, true);
      }, 2000);
    }
  }, []);

  Aos.init({});

  return (
    <>
      <div id="bottom">
        {/* Begin POPUP */}

          {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h3 style={{ textDecoration: "underline", textAlign: "center" }}>
              NEW EXHIBITION - SUMMER 2023
            </h3>
            <p style={{ textAlign: "center", fontWeight: "normal" }}>
              We are happy to announce that some of our artwork is on display
              at <span className="flash_me">Laura Z Tai Jewlery</span> in
              Lancaster, PA.
              <br />
              <br />
              You can find Laura's jewelry store at&nbsp;
              <a
                className="address"
                style={{ color: "#02064a", textDecoration: "underline" }}
                href="https://www.google.com/maps/place/Laura+Z+Tai+Fine+Jewelry+and+Watches/@40.039998,-76.3055091,15z/data=!4m6!3m5!1s0x89c6259ddac52017:0xac447ce6664c6f36!8m2!3d40.039998!4d-76.3055091!16s%2Fg%2F11q8s41b2v?entry=ttu"
              >
                101 N Queen St, Unit 111, Lancaster, PA 17603
              </a>
              .
              <br />
              <br />
              We look forward to seeing you there!
            </p>
          </Popup> */}

        {/* End POPUP */}
        <Landing />
        <Hours />
        <Curve />
        <br />
        {/* --------------------------------------------------------- */}
        <br id="br-mobile" />
        <img src={HomeImg} id="fung-shway" />
        <p id="p-top">
          American Dragon International Fine Art has partnerships with
          galleries in a wide range of cities and countries. Our founder, Lena
          Liu, through years of experience, realized that different countries
          and regions have various artistic styles and tastes in art. Some works
          of art do not have a positive acceptance in a given region, but the
          same art would be considered an exceptional creation in another area
          of the world. This can diminish the interest of an artist’s talents,
          and as a result, regional exhibitions can be a weak venue for the
          artist. In order to obtain a strong interest in the art, we have our
          galleries located in China, Japan, Korea, Italy, France, the United
          Kingdom, and the United States. The museums and galleries of many
          cities located in these countries have established a long-term
          relationship with American Dragon. This allows the artist to have the
          ability to showcase their creative talent through our professional
          partnerships.
        </p>
        <p id="p-bottom">
          We also offer many other services to our artists and those interested
          in the arts in China and the United States. Artist visits, summer
          camps, art education, and tourism coordination are some of the various
          services we can provide. Each service provided to the artist would be
          customized for the artist’s individual exhibition and other business
          collaborations. Please contact us for additional information today!
        </p>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
