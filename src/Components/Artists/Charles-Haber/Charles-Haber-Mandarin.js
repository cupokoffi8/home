import React from 'react'; 
import '../Apelles-Zhou/Apelles-Zhou.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function CharlesHaberMandarin() { 

  window.scrollTo(0, 0)

    return (
      <>
        <NavbarMandarin /> 
          <div className="artist-section"> 

          <form method="get" action="#/charles-haber"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">查尔斯·哈伯</h1> 
            <hr /> 

            {/* Artist Summary */}

              <p id="art-paragraph">
              查尔斯·哈伯 (Charles Haber) 是 20 世纪的美国艺术家。 他出生于纽约，曾在美国空军服役。 他在广告公司和美国公司担任商业艺术家多年。 
              他的作品展示了纽约体验的关键元素，包括各种形式的超现实主义、抽象表现主义和具象作品。 哈伯后期的作品探索了当时的社会问题，
              以活泼大胆的风格描绘了巴恩斯收藏的现代主义作品。 更多精彩内容，请在我们的图库中查看他惊人的原创作品。 
              </p> 

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
                <div>
              <img src="./COMING-STORM.jpeg" className="painting-ch"></img> 
              <h5 className="word-ch-1">Coming Storm</h5> 
              </div>
              <div>
              <img src="./HE-SHOOTS.jpeg" className="painting-ch-small"></img> 
              <h5 className="word-ch-2">He Shoots</h5> 
              </div>
              </div> 

              <div className="the-paintings">
              <div>
                <img src="./JUMP-BALL.jpeg" className="painting-ch-small-2"></img> 
                <h5 className="word-ch-2">Jump Ball</h5> 
                </div>
              <div> 
                <img src="./ENCORE.jpeg" className="painting-ch"></img> 
                <h5 className="word-ch-1">Encore</h5> 
                </div>
              </div> 

              <div className="the-paintings">
              <img src="./KANDINSKY-INSPIRATION.jpeg" id="painting-ch"></img> 
              <img src="./NATURE.jpeg" id="painting-ch"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ch-1">Kandinsky Inspiration</h5>
              <h5 id="caption-ch-2">Nature</h5> 
              </div> 

              <div className="the-paintings">
                <img src="./NAKED-LADIES.jpeg" id="painting-ch-other"></img> 
                <img src="./MOTHER-AND-CHILD.jpeg" id="painting-ch-other"></img> 
                <img src="./WINTER-LADY.jpeg" id="painting-ch-other"></img> 
              </div> 

              <div className="the-words">
                <h5 id="small-caption-ch">Naked Ladies</h5> 
                <h5 id="small-caption-ch">Mother and Child</h5> 
                <h5 id="small-caption-ch">Winter Lady</h5> 
              </div> 

              <div className="the-paintings">
              <img src="./PLAY-IT-AGAIN.jpeg" id="painting-ch"></img> 
              <img src="./THE-THIRD-EYE.jpeg" id="painting-ch"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ch-1">Play it Again</h5> 
              <h5 id="caption-ch-2">The Third Eye</h5> 
              </div> 

              {/* List of Paintings [Phone] */} 

              <img src="./COMING-STORM.jpeg" className="painting-ch-mobile-wide"></img>
              <h5 id="caption-mobile">Coming Storm</h5> 

              <img src="./ENCORE.jpeg" className="painting-ch-mobile-wide"></img> 
              <h5 id="caption-mobile">Encore</h5> 

              <img src="./HE-SHOOTS.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">He Shoots</h5> 

              <img src="./JUMP-BALL.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Jump Ball</h5> 

              <img src="./KANDINSKY-INSPIRATION.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Kadinsky Inspiration</h5> 

              <img src="./MOTHER-AND-CHILD.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Mother and Child</h5> 

              <img src="./NAKED-LADIES.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Naked Ladies</h5> 

              <img src="./NATURE.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Nature</h5> 

              <img src="./PLAY-IT-AGAIN.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Play it Again</h5> 

              <img src="./THE-THIRD-EYE.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">The Third Eye</h5> 

              <img src="./WINTER-LADY.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Winter Lady</h5> 

          </div> 
          </> 
    );
  }
  
  export default CharlesHaberMandarin; 