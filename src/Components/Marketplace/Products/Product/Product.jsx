import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import './Product.css';
import 'react-toastify/dist/ReactToastify.css';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = async () => {
    const variantId = product.variants?.[0]?.id;

    if (!variantId) {
      console.warn("Product has no variant");
      return;
    }

    try {
      const result = await onAddToCart(variantId, 1);
      if (result?.status === "success" || result?.completed) {
        console.log("Successfully added to cart");
      } else {
        throw new Error("Cart update was unsuccessful");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
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