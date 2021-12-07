import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../Navbar/Navbar'; 

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {

  window.scrollTo(0, 0)

  const classes = useStyles(); 

  if (!products.length) return <p className={classes.loading}>Loading...</p>; 

  return (
    <>
    <Navbar /> 
    <main className={classes.content}> 
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </> 
  );
};

export default Products;

