import React from 'react'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import { HashRouter, Switch, Route } from 'react-router-dom'; 

// Import Components 

import Home from './Components/Home/Home';

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

import ArtBasel from './Components/Exhibitions/Art-Basel/Art-Basel';
import ArtTherapy from './Components/Exhibitions/Art-Therapy/Art-Therapy';
import Headless from './Components/Exhibitions/Headless/Headless';
import MagAndMyst from './Components/Exhibitions/Mag-And-Myst/Mag-And-Myst'; 
import Magnificent from './Components/Exhibitions/Magnificent/Magnificent'; 
import SanDiego from './Components/Exhibitions/San-Diego/San-Diego';
import VictoryOfLight from './Components/Exhibitions/Victory-Of-Light/Victory-Of-Light'; 
import Works from './Components/Exhibitions/Works-At-Hefei/Works-At-Hefei'; 
import PleaseWork from './Components/Exhibitions/Oil-Painting-Exhibition/Oil-Painting-Exhibition'; 

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
            

        </Switch>
    </HashRouter>
  );
} 



export default App;
