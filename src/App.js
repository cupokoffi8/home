// This is for nav

import React, { useState, useEffect, useRef } from 'react'; 
import './App.css';
import Copyright from './Copyright'; 
import CopyrightMandarin from './Copyright-Mandarin';
import Navbar from './Components/Navbar/Navbar'; 
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom'; 

// Import Components 

import Home from './Components/Home/Home'; 
import ComingSoon from './Components/ComingSoon'; 
import ScrollButton from './Components/ScrollButton'; 

// Axios
import axios from 'axios';

// Toast
import { toast } from 'react-toastify';

// Artists
import Artists from './Components/Artists/Artists/Artists'; 
import AngelCruz from './Components/Artists/Angel-Cruz/Angel-Cruz';
import AparnaBanerjee from './Components/Artists/Aparna-Banerjee/Aparna-Banerjee'; 
import ApellesZhou from './Components/Artists/Apelles-Zhou/Apelles-Zhou'; 
import CaiJiang from './Components/Artists/Cai-Jiang/Cai-Jiang'; 
import CharlesHaber from './Components/Artists/Charles-Haber/Charles-Haber'; 
import ChiuPai from './Components/Artists/Chiu-Pai/Chiu-Pai'; 
import JillSlaymaker from './Components/Artists/Jill-Slaymaker/Jill-Slaymaker'; 
import QuiHuade from './Components/Artists/Qui-Huade/Qui-Huade';
import SuZi from './Components/Artists/Su-Zi/Su-Zi';
import XiaoLi from './Components/Artists/Xiao-Li/Xiao-Li'; 
import ZenFrescos from './Components/Artists/Zen-Frescos/Zen-Frescos'; 
import ZhaoQing from './Components/Artists/Zhao-Qing/Zhao-Qing'; 
import ZhenghuiLan from './Components/Artists/Zhengui-Lan/Zhenghui-Lan'; 
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
import NewYork from './Components/Exhibitions/Locations/United-States/New-York'; 
import Pennsylvania from './Components/Exhibitions/Locations/United-States/Pennsylvania'; 
import InkStorm from './Components/Exhibitions/Ink-Storm/Ink-Storm'; 

// The Gallery 
import OurFounder from './Components/The-Gallery/Our-Founder/Our-Founder';
import TheGallery from './Components/The-Gallery/The-Gallery/The-Gallery'; 
import VisitUs from './Components/The-Gallery/Visit-Us/Visit-Us'; 

// Art Service 
import ArtService from './Components/Art-Service/Art-Service'; 

// News and Events 
import News from './Components/News-And-Events/News-And-Events'; 

// Contact Us 
import Contact from './Components/Contact-Us/Contact-Us'; 

// ----------------------------- Chinese ----------------------------- 

// Import Components-M 
import HomeMandarin from './Components/Home/Home-Mandarin'; 
import ComingSoonMandarin from './Components/ComingSoonMandarin'; 

// Art Service-M 
import ArtServiceMandarin from './Components/Art-Service/Art-Service-Mandarin'; 

// Artists-M 
import AngelCruzMandarin from './Components/Artists/Angel-Cruz/Angel-Cruz-Mandarin';
import AritistsMandarin from './Components/Artists/Artists/Artists-Mandarin'; 
import AparnaBanerjeeMandarin from './Components/Artists/Aparna-Banerjee/Aparna-Banerjee-Mandarin'; 
import ApellesZhouMandarin from './Components/Artists/Apelles-Zhou/Apelles-Zhou-Mandarin'; 
import CaiJiangMandarin from './Components/Artists/Cai-Jiang/Cai-Jiang-Mandarin'; 
import CharlesHaberMandarin from './Components/Artists/Charles-Haber/Charles-Haber-Mandarin'; 
import ChiuPaiMandarin from './Components/Artists/Chiu-Pai/Chiu-Pai-Mandarin'; 
import JillSlaymakerMandarin from './Components/Artists/Jill-Slaymaker/Jill-Slaymaker-Mandarin'; 
import QuiHuadeMandarin from './Components/Artists/Qui-Huade/Qui-Huade-Mandarin'; 
import SuZiMandarin from './Components/Artists/Su-Zi/Su-Zi-Mandarin'; 
import XiaoLiMandarin from './Components/Artists/Xiao-Li/Xiao-Li-Mandarin'; 
import ZenFrescosMandarin from './Components/Artists/Zen-Frescos/Zen-Frescos-Mandarin'; 
import ZhaoQingMandarin from './Components/Artists/Zhao-Qing/Zhao-Qing-Mandarin'; 
import ZhenghuiLanMandarin from './Components/Artists/Zhengui-Lan/Zhengui-Lan-Mandarin';
import ZhenZhongDuanMandarin from './Components/Artists/Zhen-Zhong-Duan/Zhen-Zhong-Duan-Mandarin'; 

// Exhibitions-M  
import ExhibitionsMandarin from './Components/Exhibitions/Exhibitions-Mandarin'; 
import MagAndMystMandarin from './Components/Exhibitions/Mag-And-Myst/Mag-And-Myst-Mandarin'; 
import VictoryOfLightMandarin from './Components/Exhibitions/Victory-Of-Light/Victory-Of-Light-Mandarin'; 
import ArtBaselMandarin from './Components/Exhibitions/Art-Basel/Art-Basel-Mandarin'; 
import SanDiegoMandarin from './Components/Exhibitions/San-Diego/San-Diego-Mandarin'; 
import HeadlessMandarin from './Components/Exhibitions/Headless/Headless-Mandarin'; 
import MagnificentMandarin from './Components/Exhibitions/Magnificent/Magnificent-Mandarin'; 
import ArtTherapyMandarin from './Components/Exhibitions/Art-Therapy/Art-Therapy-Mandarin'; 
import WorksMandarin from './Components/Exhibitions/Works-At-Hefei/Works-At-Hefei-Mandarin'; 
import PleaseWorkMandarin from './Components/Exhibitions/Oil-Painting-Exhibition/Oil-Painting-Exhibition-Mandarin'; 
import NewYorkMandarin from './Components/Exhibitions/Locations/United-States/New-York-Mandarin'; 

// The Gallery-M 
import OurFounderMandarin from './Components/The-Gallery/Our-Founder/Our-Founder-Mandarin'; 
import TheGalleryMandarin from './Components/The-Gallery/The-Gallery/The-Gallery-Mandarin'; 
import VisitUsMandarin from './Components/The-Gallery/Visit-Us/Visit-Us-Mandarin'; 

// News and Events-M 
import NewsMandarin from './Components/News-And-Events/News-And-Events-Mandarin'; 

// Contact Us-M 
import ContactMandarin from './Components/Contact-Us/Contact-Us-Mandarin'; 

import Cart from './Components/Marketplace/Cart/Cart'; 
import Products from './Components/Marketplace/Products/Products' 
import Checkout from './Components/Marketplace/CheckoutForm/Checkout/Checkout';
import PennsylvaniaMandarin from './Components/Exhibitions/Locations/United-States/Pennsylvania-Mandarin'; 
import InkStormMandarin from './Components/Exhibitions/Ink-Storm/Ink-Storm-Mandarin';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartId, setCartId] = useState(() => localStorage.getItem("cart_id"));
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [url, setUrl] = useState('');

  const history = useHistory();

  const headers = {
    'Content-Type': 'application/json',
    'x-publishable-api-key': process.env.REACT_APP_MEDUSA_API_KEY,
  };

  const PopUpMessageGood = ({ closeToast }) => (
    <>
      <h5 className="added">Item Added to Cart</h5>
      <a
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
        href="#/cart"
        className="view-cart"
      >
        View Cart
      </a>
    </>
  );

  const PopUpMessageBad = ({ closeToast }) => (
    <>
      <h5 className="added">Error Adding to Cart</h5>
    </>
  );

  toast.configure();

  const notifySuccess = () => {
      toast.success(<PopUpMessageGood />, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 6000
      });
    };
  
  const notifyError = () => {
      toast.error(<PopUpMessageBad />, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 6000
      });
    };

  useEffect(() => {
    return history.listen(() => {
      setUrl(window.location.href);
    });
  }, [history]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:9000/store/products', {
        headers,
        credentials: 'include',
      });

      const { products: data } = await response.json();
      console.log({ data });
      setProducts(data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const fetchExistingCart = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/store/carts/${id}`, {
        headers,
        credentials: 'include',
      });

      const data = await response.json();
      setCart(data.cart);
    } catch (err) {
      console.error('Failed to fetch existing cart:', err);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await fetch('http://localhost:9000/store/carts', {
        method: 'POST',
        headers,
        credentials: 'include',
        body: JSON.stringify({}),
      });

      const data = await response.json();
      console.log('Created cart:', data);
      setCart(data.cart);
      setCartId(data.cart.id);
      localStorage.setItem('cart_id', data.cart.id);
    } catch (err) {
      console.error('Failed to create new cart:', err);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    if (!cart || !cart.id) {
      console.error('Cart is not ready yet.');
      notifyError();
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:9000/store/carts/${cart.id}/line-items`,
        {
          method: 'POST',
          headers,
          credentials: 'include',
          body: JSON.stringify({
            variant_id: productId,
            quantity,
          }),
        }
      );

      const data = await response.json();

      console.log('Cart after add:', data);

      if (!response.ok || data?.type === 'error') {
        throw new Error(data.message || 'Cart update failed');
      }

      if (data.cart) {
        setCart(data.cart);
        notifySuccess();
      } else {
        throw new Error('No cart returned');
      }

    } catch (err) {
      console.error('Error adding to cart:', err);
      notifyError();
    }
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    try {
      const res = await fetch(`http://localhost:9000/store/carts/${cartId}/line-items/${lineItemId}`, {
        method: 'POST',
        headers,
        credentials: 'include',
        body: JSON.stringify({ quantity }),
      });

      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error('Failed to update cart quantity:', err);
    }
  };

  const handleRemoveFromCart = async (lineItemId) => {
    try {
      const res = await fetch(`http://localhost:9000/store/carts/${cartId}/line-items/${lineItemId}`, {
        method: 'DELETE',
        headers,
        credentials: 'include',
      });

      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error('Failed to remove item from cart:', err);
    }
  };

  const handleEmptyCart = async () => {
    try {
      for (const item of cart.items) {
        await handleRemoveFromCart(item.id);
      }
    } catch (err) {
      console.error('Failed to empty cart:', err);
    }
  };

  const refreshCart = async () => {
    try {
      const res = await fetch('http://localhost:9000/store/carts', {
        method: 'POST',
        headers,
        credentials: 'include',
        body: JSON.stringify({}),
      });

      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error('Failed to refresh cart:', err);
    }
  };

  const handleCompleteCheckout = async (cartId) => {
    const MEDUSA_BACKEND_URL = process.env.REACT_APP_MEDUSA_BACKEND_URL || 'http://localhost:9000';
  
    try {
      const res = await fetch(`${MEDUSA_BACKEND_URL}/store/carts/${cartId}/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-publishable-api-key': process.env.REACT_APP_MEDUSA_API_KEY,
        },
        credentials: 'include',
      });
  
      const data = await res.json();
      setOrder(data.data || data);
      await refreshCart(); // Reset cart after checkout
    } catch (error) {
      console.error('Checkout error:', error);
      setErrorMessage(error.message || 'Checkout failed.');
    }
  };  

  useEffect(() => {
    fetchProducts();
    if (!cartId) {
      fetchCart();
    } else {
      fetchExistingCart(cartId);
    }
  }, []);

  return (
    <>
    <HashRouter> 
      <Navbar />
        <Switch>
            
            <Route exact path="/" component={Home} />

            {/* Artists */}
            <Route path="/apelles-zhou" component={ApellesZhou} /> 
            <Route path="/aparna-banerjee" component={AparnaBanerjee} /> 
            <Route path="/artists" component={Artists} />
            <Route path="/cai-jiang" component={CaiJiang} /> 
            <Route path="/charles-haber" component={CharlesHaber} /> 
            <Route path="/chiu-pai" component={ChiuPai} /> 
            <Route path="/jill-slaymaker" component={JillSlaymaker} /> 
            <Route path="/qui-huade" component={QuiHuade} /> 
            <Route path="/su-zi" component={SuZi} /> 
            <Route path="/zhen-zhong-duan" component={ZhenZhongDuan} />
            <Route path="/xiao-li" component={XiaoLi} /> 
            <Route path="/zen-frescos" component={ZenFrescos} /> 
            <Route path="/zhao-qing" component={ZhaoQing} /> 
            <Route path="/zhenghui-lan" component={ZhenghuiLan} />  
            <Route path="/angel-cruz" component={AngelCruz} /> 

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
            <Route path="/new-york" component={NewYork} /> 
            <Route path="/pennsylvania" component={Pennsylvania} /> 
            <Route path="/ink-storm" component={InkStorm} /> 

            {/* The Gallery */} 
            <Route path="/our-founder" component={OurFounder} />
            <Route path="/the-gallery" component={TheGallery} /> 
            <Route path="/about-us" component={VisitUs} /> 

            {/* Marketplace */}
            <Route path="/shop" component={Products}>  
              <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
            </Route>
            <Route path="/cart" component={Cart}> 
              <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
            </Route>
            <Route path="/checkout" exact>
              <Checkout cart={cart} order={order} onCaptureCheckout={handleCompleteCheckout} error={errorMessage} />
            </Route>

            {/* Art Service */}
            <Route path="/art-service" component={ArtService} /> 

            {/* News And Events */} 
            <Route path="/news-and-events" component={News} /> 

            {/* Contact Us */}
            <Route path="/contact-us" component={Contact} /> 

            {/* -------------------------------- Chinese -------------------------------- */} 

            <Route path="/mandarin" component={HomeMandarin} /> 

            {/* Artists-M */}
            <Route path="/angel-cruz-mandarin" component={AngelCruzMandarin} /> 
            <Route path="/apelles-zhou-mandarin" component={ApellesZhouMandarin} /> 
            <Route path="/aparna-banerjee-mandarin" component={AparnaBanerjeeMandarin} />  
            <Route path="/artists-mandarin" component={AritistsMandarin} /> 
            <Route path="/cai-jiang-mandarin" component={CaiJiangMandarin} /> 
            <Route path="/charles-haber-mandarin" component={CharlesHaberMandarin} />   
            <Route path="/chiu-pai-mandarin" component={ChiuPaiMandarin} />  
            <Route path="/jill-slaymaker-mandarin" component={JillSlaymakerMandarin} /> 
            <Route path="/qui-huade-mandarin" component={QuiHuadeMandarin} />  
            <Route path="/su-zi-mandarin" component={SuZiMandarin} />
            <Route path="/zhen-zhong-duan-mandarin" component={ZhenZhongDuanMandarin} /> 
            <Route path="/xiao-li-mandarin" component={XiaoLiMandarin} /> 
            <Route path="/zen-frescos-mandarin" component={ZenFrescosMandarin} />  
            <Route path="/zhao-qing-mandarin" component={ZhaoQingMandarin} /> 
            <Route path="/zhenghui-lan-mandarin" component={ZhenghuiLanMandarin} />  

            {/* Exhibitions-M */} 
            <Route path="/exhibitions-mandarin" component={ExhibitionsMandarin} /> 
            <Route path="/art-basel-mandarin" component={ArtBaselMandarin} /> 
            <Route path="/art-therapy-mandarin" component={ArtTherapyMandarin} />  
            <Route path="/headless-mandarin" component={HeadlessMandarin} />  
            <Route path="/mag-and-myst-mandarin" component={MagAndMystMandarin} />  
            <Route path="/magnificent-mandarin" component={MagnificentMandarin} />  
            <Route path="/san-diego-mandarin" component={SanDiegoMandarin} />  
            <Route path="/victory-of-light-mandarin" component={VictoryOfLightMandarin} />  
            <Route path="/works-at-hefei-mandarin" component={WorksMandarin} /> 
            <Route path="/oil-painting-exhibition-mandarin" component={PleaseWorkMandarin} /> 
            <Route path="/new-york-mandarin" component={NewYorkMandarin} /> 
            <Route path="/pennsylvania-mandarin" component={PennsylvaniaMandarin} /> 
            <Route path="/ink-storm-mandarin" component={InkStormMandarin} /> 

            {/* The Gallery-M */} 
            <Route path="/our-founder-mandarin" component={OurFounderMandarin} /> 
            <Route path="/the-gallery-mandarin" component={TheGalleryMandarin} /> 
            <Route path="/about-us-mandarin" component={VisitUsMandarin} /> 

            {/* Marketplace-M  */}
            <Route path="/shop-mandarin" component={ComingSoonMandarin} />  

            {/* Art Service-M */}
            <Route path="/art-service-mandarin" component={ArtServiceMandarin} /> 

            {/* News And Events-M */} 
            <Route path="/news-and-events-mandarin" component={NewsMandarin} />  

            {/* Contact Us-M */}
            <Route path="/contact-us-mandarin" component={ContactMandarin} /> 

        </Switch>
      {/* <ScrollButton />  */}
      {(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? <Copyright /> : <CopyrightMandarin />}
    </HashRouter>
    </>
  );
} 



export default App;