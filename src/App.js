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

function App() {
  return (
    <HashRouter>
      <Navbar />
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
            <Route path="/home" component={HomeGallery} /> 
            <Route path="/our-founder" component={OurFounder} />
            <Route path="/the-gallery" component={TheGallery} /> 

            {/* Art Service */}
            <Route path="/art-service" component={ArtService} /> 

            {/* News And Events */} 
            <Route path="/news-and-events" component={News} /> 

            {/* Contact Us */}
            <Route path="/contact-us" component={Contact} /> 

        </Switch>
      <Copyright />
    </HashRouter>
  );
} 



export default App;
