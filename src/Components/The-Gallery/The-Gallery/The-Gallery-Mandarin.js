import React from 'react'; 
import './The-Gallery.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function TheGalleryMandarin() {
    return (
      <>
        <NavbarMandarin /> 
          <div className="The-Gallery"> 

          <form method="get" action="#/the-gallery"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="the-gallery">画廊</h1> 
            <hr /> 

            <img id="image-thing-at" src="TG1.jpeg" /> 
            <h5 id="caption">
              Lancaster, Pennsylvania 
            </h5>

            <img id="image-thing-at" src="TG2.png" /> 
            <h5 id="caption">
              New York City, New York  
            </h5>

            <img id="image-thing-at" src="TG3.png" /> 
            <h5 id="caption">
              New York City, New York  
            </h5>

            <img id="image-thing-at" src="TG4.png" /> 
            <h5 id="caption">
              Hangzhou, China 
            </h5>

            <img id="image-thing-at" src="TG5.png" /> 
            <h5 id="caption">
              Beijing, China 
            </h5>

            <img id="image-thing-at" src="TG6.png" /> 
            <h5 id="caption">
              Japan 
            </h5>

            <img id="image-thing-at" src="TG7.jpeg" /> 
            <h5 id="caption">
              The Wall Street Art Space, New York, NY 
            </h5>

            <img id="image-thing-at" src="TG8.jpeg" /> 
            <h5 id="caption">
              The Wall Street Art Space, New York, NY 
            </h5> 

            <br /> 

            <p id="art-paragraph-other">
            美國龍美術館是展示世界各地一些最有才華的藝術家的主要來源。 我們幫助在藝術家與全球最好的畫廊和拍賣場館之間建立緊密的合作機會，
            例如蘇富比，佳士得，巴塞爾藝術博覽會和私人收藏家博物館。 我們的專業知識將通過展覽，研討會，代理和拍賣等形式，
            幫助展示私人和公共場所的藝術才華。 利用我們通過全球合作夥伴網絡提供的資源來發行藝術家的高品質作品。 美國龍採取開放，
            包容和多元化的態度，吸引了各行各業的才華橫溢和富有創造力的藝術家。 請與我們聯繫以了解有關我們服務的更多信息。 
            </p>

          </div>
        </> 
    );
  }
  
  export default TheGalleryMandarin; 