import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './Product.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useStyles from './styles';

const PopUpMessage = ({ closeToast }) => (
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

const Product = ({ product, onAddToCart }) => {
  toast.configure();

  const classes = useStyles();

  const notify = () => {
    toast.success(<PopUpMessage />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 6000,
      color: 'green'
    });
  };

  const handleAddToCart = () => {
    // Pass variant ID instead of product ID, because Medusa's cart uses variant_id
    const variantId = product.variants?.[0]?.id;
    if (variantId) {
      onAddToCart(variantId, 1);
      notify();
    } else {
      console.warn("Product has no variant");
    }
  };

  const productImage = product.images?.[0]?.url || '';
  const productPrice = product.variants?.[0]?.prices?.[0]?.amount || 0;
  const productCurrency = product.variants?.[0]?.prices?.[0]?.currency_code?.toUpperCase() || 'USD';

  return (
    <Card className="root">
      <CardMedia
        component="img"
        className="media"
        image={productImage}
        title={product.title}
      />
      <CardContent>
        <div className="card-content">
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`${(productPrice / 100).toFixed(2)} ${productCurrency}`}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;