import React from 'react'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import Copyright from './Copyright'; 
import { HashRouter, Switch, Route } from 'react-router-dom'; 

// Import Components 

import Home from './Components/Home/Home';

  // Artists
import Artists from './Components/Artists/Artists/Artists'; 
import AparnaBanerjee from './Components/Artists/Aparna-Banerjee/Aparna-Banerjee'; 
import ApellesZhou from './Components/Artists/Apelles-Zhou/Apelles-Zhou'; 
import CaiJiang from './Components/Artists/Cai-Jiang/Cai-Jiang';
import ChiuPai from './Components/Artists/Chiu-Pai/Chiu-Pai';
import QuiHuade from './Components/Artists/Qui-Huade/Qui-Huade';
import SuZi from './Components/Artists/Su-Zi/Su-Zi';
import XiaoLi from './Components/Artists/Xiao-Li/Xiao-Li'; 
import ZenFrescos from './Components/Artists/Zen-Frescos/Zen-Frescos'; 
import ZhaoQing from './Components/Artists/Zhao-Qing/Zhao-Qing'; 
import ZhenZhongDuan from './Components/Artists/Zhen-Zhong-Duan/Zhen-Zhong-Duan'; 

  // Exhibitions 
import Exhibitions from './Components/Exhibitions/Exhibitions'; 
import ArtBasel from './Components/Exhibitions/Art-Basel/Art-Basel';
import ArtTherapy from './Components/Exhibitions/Art-Therapy/Art-Therapy';
import Headless from './Components/Exhibitions/Headless/Headless';
import MagAndMyst from './Components/Exhibitions/Mag-And-Myst/Mag-And-Myst'; 
import Magnificent from './Components/Exhibitions/Magnificent/Magnificent'; 
import SanDiego from './Components/Exhibitions/San-Diego/San-Diego';
import VictoryOfLight from './Components/Exhibitions/Victory-Of-Light/Victory-Of-Light'; 
import Works from './Components/Exhibitions/Works-At-Hefei/Works-At-Hefei'; 
import PleaseWork from './Components/Exhibitions/Oil-Painting-Exhibition/Oil-Painting-Exhibition'; 

  // The Gallery 
import HomeGallery from './Components/The-Gallery/Home/Home-Gallery'; 
import OurFounder from './Components/The-Gallery/Our-Founder/Our-Founder';
import TheGallery from './Components/The-Gallery/The-Gallery/The-Gallery'; 

  // Art Service 
import ArtService from './Components/Art-Service/Art-Service'; 

  // News and Events 
import News from './Components/News-And-Events/News-And-Events'; 

  // Contact Us 
import Contact from './Components/Contact-Us/Contact-Us'; 

// ----------------------------- Chinese ----------------------------- 

// Import Components-M 
import HomeMandarin from './Components/Home/Home-Mandarin'; 

// Art Service-M 
import ArtServiceMandarin from './Components/Art-Service/Art-Service-Mandarin'; 

// Artists-M 
import AparnaBanerjeeMandarin from './Components/Artists/Aparna-Banerjee/Aparna-Banerjee-Mandarin'; 
import CaiJiangMandarin from './Components/Artists/Cai-Jiang/Cai-Jiang-Mandarin';
import ChiuPaiMandarin from './Components/Artists/Chiu-Pai/Chiu-Pai-Mandarin'; 
import QuiHuadeMandarin from './Components/Artists/Qui-Huade/Qui-Huade-Mandarin'; 
import SuZiMandarin from './Components/Artists/Su-Zi/Su-Zi-Mandarin'; 
import XiaoLiMandarin from './Components/Artists/Xiao-Li/Xiao-Li-Mandarin'; 
import ZenFrescosMandarin from './Components/Artists/Zen-Frescos/Zen-Frescos-Mandarin'; 
import ZhaoQingMandarin from './Components/Artists/Zhao-Qing/Zhao-Qing-Mandarin'; 

// Exhibitions 
import MagAndMystMandarin from './Components/Exhibitions/Mag-And-Myst/Mag-And-Myst-Mandarin'; 

// News and Events 
import NewsMandarin from './Components/News-And-Events/News-And-Events-Mandarin'; 
function App() {
  return (
    <HashRouter> 
        <Switch>
            
            <Route exact path="/" component={Home} />

            {/* Artists */}
            <Route path="/apelles-zhou" component={ApellesZhou} /> 
            <Route path="/aparna-banerjee" component={AparnaBanerjee} /> 
            <Route path="/artists" component={Artists} />
            <Route path="/cai-jiang" component={CaiJiang} /> 
            <Route path="/chiu-pai" component={ChiuPai} /> 
            <Route path="/qui-huade" component={QuiHuade} /> 
            <Route path="/su-zi" component={SuZi} /> 
            <Route path="/xiao-li" component={XiaoLi} /> 
            <Route path="/zen-frescos" component={ZenFrescos} /> 
            <Route path="/zhao-qing" component={ZhaoQing} /> 
            <Route path="/zhen-zhong-duan" component={ZhenZhongDuan} /> 

            {/* Exhibitions */} 
            <Route path="/exhibitions" component={Exhibitions} /> 
            <Route path="/art-basel" component={ArtBasel} /> 
            <Route path="/art-therapy" component={ArtTherapy} /> 
            <Route path="/headless" component={Headless} /> 
            <Route path="/mag-and-myst" component={MagAndMyst} /> 
            <Route path="/magnificent" component={Magnificent} /> 
            <Route path="/san-diego" component={SanDiego} /> 
            <Route path="/victory-of-light" component={VictoryOfLight} /> 
            <Route path="/works-at-hefei" component={Works} /> 
            <Route path="/oil-painting-exhibition" component={PleaseWork} /> 

            {/* The Gallery */} 
            <Route path="/our-founder" component={OurFounder} />
            <Route path="/the-gallery" component={TheGallery} /> 

            {/* Art Service */}
            <Route path="/art-service" component={ArtService} /> 

            {/* News And Events */} 
            <Route path="/news-and-events" component={News} /> 

            {/* Contact Us */}
            <Route path="/contact-us" component={Contact} /> 

            {/* -------------------------------- Chinese -------------------------------- */} 

            <Route path="/mandarin" component={HomeMandarin} /> 

            {/* Artists-M */}

            <Route path="/apelles-zhou-mandarin" component={ApellesZhou} /> 
            <Route path="/aparna-banerjee-mandarin" component={AparnaBanerjeeMandarin} />  
            <Route path="/artists-mandarin" component={Artists} />
            <Route path="/cai-jiang-mandarin" component={CaiJiangMandarin} />   
            <Route path="/chiu-pai-mandarin" component={ChiuPaiMandarin} />  
            <Route path="/qui-huade-mandarin" component={QuiHuadeMandarin} />  
            <Route path="/su-zi-mandarin" component={SuZiMandarin} /> 
            <Route path="/xiao-li-mandarin" component={XiaoLiMandarin} /> 
            <Route path="/zen-frescos-mandarin" component={ZenFrescosMandarin} />  
            <Route path="/zhao-qing-mandarin" component={ZhaoQingMandarin} />  
            <Route path="/zhen-zhong-duan-mandarin" component={ZhenZhongDuan} /> 

            {/* Exhibitions-M */} 

            <Route path="/exhibitions-mandarin" component={Exhibitions} /> 
            <Route path="/art-basel-mandarin" component={ArtBasel} /> 
            <Route path="/art-therapy-mandarin" component={ArtTherapy} /> 
            <Route path="/headless-mandarin" component={Headless} /> 
            <Route path="/mag-and-myst-mandarin" component={MagAndMystMandarin} />  
            <Route path="/magnificent-mandarin" component={Magnificent} /> 
            <Route path="/san-diego-mandarin" component={SanDiego} /> 
            <Route path="/victory-of-light-mandarin" component={VictoryOfLight} /> 
            <Route path="/works-at-hefei-mandarin" component={Works} /> 
            <Route path="/oil-painting-exhibition-mandarin" component={PleaseWork} /> 

            {/* The Gallery-M */} 

            <Route path="/our-founder-mandarin" component={OurFounder} />
            <Route path="/the-gallery-mandarin" component={TheGallery} /> 

            {/* Art Service-M */}

            <Route path="/art-service-mandarin" component={ArtServiceMandarin} /> 

            {/* News And Events-M */} 

            <Route path="/news-and-events-mandarin" component={NewsMandarin} />  

            {/* Contact Us-M */}

            <Route path="/contact-us-mandarin" component={Contact} /> 

        </Switch>
      <Copyright />
    </HashRouter>
  );
} 



export default App;
