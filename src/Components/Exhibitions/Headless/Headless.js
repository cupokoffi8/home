import React from 'react'; 
import './Headless.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function Headless() {
  window.scrollTo(0, 0);
    return (
      <>
        <Navbar />
          <div className="Headless"> 

          <form method="get" action="/home/#/headless-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Headless and Unintentional</h1> 
            <hr /> 

            <img src="./HU1.jpeg" id="image-thing-hu" /> 

            <br /> 

            <h6 id="head-hu">
            “Shen Jingdong and Cai Jiang: Headless and Unintentional” Exhibition 
            </h6> 
            <h5 id="caption">
            Date: Opening night, September 7, 2016
            </h5> 
            <h5 id="caption">
            September 7 to September 30, 2016 
            </h5>
            <h5 id="caption">
            Exhibition: WhiteBox Gallery, 329 Broome Street, New York, NY 10002 
            </h5>
            <h5 id="caption">
            Collaboration: Curator, Lena Liu 
            </h5>
            <h5 id="caption">
            Artists: Shen Jin Dong, Jon Tsoi 
            </h5> 

            <br /> 

            <img src="./HU2.jpeg" id="image-thing-hu" /> 

            <br /> 

            <h2 id="header-thing-hu">
            Curator Lena Liu stated: 
            </h2> 

            <p id="art-paragraph-other">
            Shen Jing Dong and Cai Jiang, Headless and Unintentional Contemporary Art Exhibition, was 
            unveiled on September 7, 2016. In the new artistic expression, Cai Jiang covers his eyes 
            and cuts the paintings created by Shen Jing Dong with a knife. The words and deeds of justice 
            and the anti-sense revelation of the cruelty of war. Finally, the audience wrapped the gauze 
            with the bundled picture. This is to reveal everyone’s common desire for peace and harmony in 
            the world. 
              </p> 
              <p id="art-paragraph-other">
              Shen Jing Dong was born in Nanjing in the 1960’s. In the 1980’s, he was deeply influenced by 
              the “85 New Wave”. After graduating from a university in the 1990’s, he was assigned to the 
              military art troupe to work in stage art. He also worked on his own artistic creations. He 
              came to Beijing in 2004. Like most Chinese born in the 1960’s, he was born into the Cultural 
              Revolution and grew up in reform and opening. His childhood ideal education of red, and his 
              18 years of military experience, left him with a deep imprint and a reality with him today. 
              All of this is naturally reflected in Shen’s work. 
              </p> 
              <p id="art-paragraph-other">
              In contrast, Cai Jiang’s universal philosophy of “doing nothing for nothing“ in Chinese philosophy, 
              embodies its randomness, unpredictability, and natural life wisdom. His paintings not only cover his 
              eyes and look inward, but also create contemporary art like the rain, the hair, the volcano, and the 
              earthquake. At the same time, the audience will close their eyes and experience the process of 
              resurrection, restoration, and healing brought about by the performance. In this form, the behavioral 
              healing of the “ Yellow Emperor’s Internal Classic” and the “separation” of the Argentine/Italian 
              artist Lucio Fontana, the new development after the Japanese legendary performance group Gutai Art 
              Association, has created a road to contemporary blind healing that has never been seen before. 
              </p> 
              <p id="art-paragraph-other">
              Shen Jing Dong and Cai Jiang jointly completed such a wonderful exhibition of contemporary art, so 
              that their works can be interconnected and intertwined, profound, but opposite each other. Shen Jing 
              Dong created a gorgeous, positive energy military image, with Cai Jiang. It is a strong explosive 
              force of contrasts. This has a profound meaning, and like the ups and downs of the world today, the 
              yin and the yang in interactions change. 
              </p> 

              <img id="image-thing" src="HU3.jpeg" /> 

              <br /> 

              <h2 id="header-thing-hu">
              About the Artists:  
            </h2> 

            <p id="art-paragraph-other">
            Shen Jing Dong, was born in 1965, and he lives and works in Beijing. After graduating from Nanjing 
            Xiao Zhuang Normal Art Classes in 1984, he studied in the Fine Arts Department of the Nanjing Art 
            College, and graduated in 1991. In the same year, he was assigned to the Nanjing Military Region 
            Frontline Drama Troupe to work in stage art. This military background inspired the art style of Shen, 
            images and cartoon style military portraits. He uses ceramic sculptures and paintings to continually 
            explore themes of heroes and pop art. His work has been exhibited in the United States, Europe, and 
            China. Recent exhibitions include: 2015, “ Censure”, DOCK SUD Gallery, France. 2014, Paris Art Fair, 
            50th Anniversary of the Establishment of Diplomatic Relations between China and France ( la Chine a 
            l’honneur). 2010 and 2012, “ Visual Art, East and West Sword”, American Tour. 
              </p> 
              <p id="art-paragraph-other">
              Cai Jiang Jon Tsoi was originally named Cai Jianhua, originally from Sichuan, China. In 1979, he went 
              to New York City, a place of contemporary art in the United States. For 37 years, he has been cultivating 
              and understanding the super-sensory, super-experience, and the time-out “ moral experience” of Chinese 
              philosophy. Combining Chinese medicine with the hope of cutting, yin and yang, and the body, spirit, and 
              the soul of the “ Emperor’s Internal Classic”. Since 1981, he has held more than 30 individual art exhibitions 
              in the United States and has participated in more than 20 exhibitions. He is represented and promoted by six 
              American galleries and brokerage firms, a British gallery, and a Chinese brokerage firm. He has participated 
              in art fairs all over the world. In 2014, he gave a four day blind art performance at the Queen’s Museum in 
              New York City, entitled “ Art Diagnostics and Diagnosis of Art”. From 2015 to 2016, he performed blind 
              performances and solo exhibitions at the WhiteBox Art Center, in New York City. In 2016 he did solo exhibitions 
              at the Chongqing Changjiang Contemporary Art Museum and the Beijing Hongbo Art Museum. His works have been 
              collected by President George Bush, as well as a number of art institutions and individuals. 
              </p> 

          </div>
        </> 
    );
  }
  
  export default Headless;