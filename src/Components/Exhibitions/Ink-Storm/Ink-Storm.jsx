import React from 'react'; 
import '../Works-At-Hefei/Works-At-Hefei.css'; 
import '../../Artists/Apelles-Zhou/Apelles-Zhou.css'; 
import '../../Artists/Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../../Artists/Chiu-Pai/Chiu-Pai.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function InkStorm() { 

  Aos.init({}); 
  window.scrollTo(0, 0);
    return (
      <>
          
          <div className="Ink-Storm"> 

          <form method="get" action="#/ink-storm-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">"Ink Storm" and "Charm" Exhibition</h1> 
            <hr /> 

            <h5 id="caption">
              June 3rd – July 3rd, 2022 
            </h5> 

            <img id="image-thing-at" src="./IS2.jpeg" /> 

            <br /> 

            <p id="art-paragraph">
            On the evening of June 3, two art exhibitions, "Ink Storm" and "Charm", were held at the 
            American Dragon International Fine Art Gallery in the United States. 
            </p> 

            <p id="art-paragraph-other">
            During the pandemic, artists have created many excellent works. The exhibition period of our 
            American Dragon International Fine Art Gallery is full this year, so the two exhibitions in this 
            issue are displayed within two spaces of the American Dragon International Fine Art Gallery at 
            the same time. 
            </p> 

            <br /> 

            <div className="the-paintings">
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS1.png" id="painting-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS3.png" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-right" data-aos-duration="1000" src="./IS1.png" id="image-mobile-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS3.png" id="image-mobile-cp" /> 

            <p id="art-paragraph">
            The exhibitions have been Introduced by Ms. Liu Wei, Chairman of Asia American Culture Media Group, 
            and CEO / Senior Curator of The American Dragon International Fine Art Gallery.  In recent years, 
            Asian art forms have become an important channel for the West, in order to explore oriental culture 
            and its aesthetic value.
            </p> 

            <div className="the-paintings">
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS4.jpeg" id="painting-cp" /> 
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS5.jpeg" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-left" data-aos-duration="1000" src="./IS4.jpeg" id="image-mobile-cp" /> 
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS5.jpeg" id="image-mobile-cp" /> 

            <p id="art-paragraph">
            In this exhibition with the theme of "Ink Storm", we specially invited the artist Mr. Lan Zhenghui to 
            exhibit 13 works he created within the past two years. Lan Zenghui is generally known for creating 
            large-scale abstract ink paintings. His ink works are known for promoting the natural sense of movement 
            and power of ink. While paying tribute to Chinese ink painting, his bold and energetic brushstrokes drive 
            ink painting to discover its own dynamic in a way of contemporary art landscape, liberating ink painting 
            from the state determined by form. 
            </p> 

            <p id="art-paragraph-other">
            With its rich and diverse artistic vocabulary and unparalleled form vitality, Chinese ink painting is being 
            understood and loved by collectors in the Western art market, with profound artistic conception and vibrant 
            reflection. 
            </p> 

            <br /> 

            <div className="the-paintings">
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS6.jpeg" id="painting-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS7.jpeg" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-right" data-aos-duration="1000" src="./IS6.jpeg" id="image-mobile-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS7.jpeg" id="image-mobile-cp" /> 

            <p id="art-paragraph">
            Another exhibition, "Charming", at The American Dragon International Fine Art Gallery, is the American 
            artist Angel Cruz, who graduated from the Pennsylvania College of Art and Design and also obtained a Masters 
            Degree in Digital Arts from the Maryland Institute, College of Art. The exhibition features 7 of his works. 
            Ms. Liu Wei states: “In Angel's paintings, I saw the shadow of the Norwegian expressionist Edvard Munch. 
            The painting object may be the carrier for Angel to express her emotions.” 
            </p> 

            <p id="art-paragraph-other">
            Angel's female figures have different emotions. He expresses the anxieties, pain, and pessimism of his 
            characters through twisted curves and disturbing faces. Angel is a painter who expresses the soul. The 
            visual impact of the work makes people think a lot after viewing the images. <br /> 
            <br /> 
            The exhibition is co-hosted by the Asian American Culture Media Group and The American Dragon International 
            Fine Art Gallery. The exhibition runs until July 3rd, 2022. 
            </p> 

          </div>
        </> 
    );
  }
  
  export default InkStorm; 