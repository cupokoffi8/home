import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => {
    cart.items.forEach((item) => onRemoveFromCart(item.id));
  };

  const renderEmptyCart = () => (
    <div className="empty-cart">
      <Typography
        variant="subtitle1"
        style={{ textAlign: "center", marginBottom: "55vh", marginTop: "25vh" }}
      >
        You have no items in your shopping cart,&nbsp;
        <Link className={classes.link} to="/shop">
          start adding some
        </Link>
        !
      </Typography>
    </div>
  );

  if (!cart || !cart.items) return (
    renderEmptyCart()
  );

  const subtotalAmount = cart.items.reduce(
    (acc, item) => acc + item.unit_price * item.quantity,
    0
  );

  const firstItemWithCurrency = cart.items.find(
    (item) => item?.variant?.prices?.[0]?.currency_code
  );
  const currency =
    firstItemWithCurrency?.variant?.prices?.[0]?.currency_code?.toUpperCase() ||
    'USD';

  const formattedSubtotal = (subtotalAmount / 100).toLocaleString("en-US", {
    style: "currency",
    currency,
  });

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {formattedSubtotal}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography
        className={classes.title}
        variant="h3"
        gutterBottom
        style={{ textAlign: "center" }}
      >
        Your Shopping Cart
      </Typography>
      {!cart.items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;