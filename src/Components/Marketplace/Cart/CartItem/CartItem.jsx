import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  if (!item) return null;

  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateCartQty(lineItemId, newQuantity);
  };

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  const formattedPrice = (item.unit_price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: item.variant?.prices?.[0]?.currency_code?.toUpperCase() || "USD"
  });

  const title = item.product_title || "Untitled Product";
  const variantTitle = item.title || "";
  const thumbnail = item.thumbnail || 'placeholder.png';

  return (
    <Card className="cart-item">
      <CardMedia
        image={thumbnail}
        alt={title}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{title}</Typography>
        {/* <Typography variant="subtitle1">Variant: {variantTitle}</Typography> */}
        <Typography variant="h6">{formattedPrice}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;