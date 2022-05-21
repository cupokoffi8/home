import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'; 
import { Link } from 'react-router-dom'; 
import './Product.css'; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useStyles from './styles'; 
import { green } from '@material-ui/core/colors';

const PopUpMessage = ({ closeToast }) => {
  return ( 
    <>
      <h5 style={{marginLeft: '30px'}} className="added">Item Added to Cart</h5>
      <a style={{marginLeft: '70px', textDecoration: 'none', fontWeight: 'bold'}} href="#/cart" className="view-cart">View Cart</a>  
    </> 
  );
}

const Product = ({ product, onAddToCart }) => { 

  toast.configure()

  const classes = useStyles(); 

  const notify = ()=>{
 
    toast.success(<PopUpMessage />,
           {position: toast.POSITION.TOP_CENTER, autoClose:6000, color:'green'})
}
  
  const handleAddToCart = () => onAddToCart(product.id, 1)

  return (
    <Card className='root'> 
      <CardMedia component="img" className='media' image={product.image.url} title={product.name} /> 
      <CardContent>
        <div className='card-content'>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => {
          handleAddToCart();
           notify(); 
        }}>
          <AddShoppingCart /> 
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

