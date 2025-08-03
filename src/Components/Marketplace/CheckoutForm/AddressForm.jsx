import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './CustomTextField';

const AddressForm = ({ cart, onSubmit }) => {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();

  const MEDUSA_BACKEND_URL = process.env.REACT_APP_MEDUSA_BACKEND_URL || 'http://localhost:9000';

  const headers = {
    'Content-Type': 'application/json',
    'x-publishable-api-key': process.env.REACT_APP_MEDUSA_API_KEY,
  };

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await fetch(`${MEDUSA_BACKEND_URL}/store/regions`, { headers });
        const data = await res.json();
        const regionList = data.regions || [];
        setRegions(regionList);
        if (regionList.length > 0) {
          setSelectedRegion(regionList[0].id);
        }
      } catch (error) {
        console.error('Failed to fetch regions:', error);
      }
    };

    fetchRegions();
  }, [MEDUSA_BACKEND_URL]);

  useEffect(() => {
    const fetchShippingOptions = async () => {
      if (!selectedRegion || !cart?.id) return;

      try {
        const res = await fetch(`${MEDUSA_BACKEND_URL}/store/shipping-options/${cart.id}`, {
          headers,
        });
        const data = await res.json();
        const optionsForRegion =
          data.shipping_options?.filter((option) => option.region_id === selectedRegion) || [];

        setShippingOptions(optionsForRegion);
        if (optionsForRegion.length > 0) {
          setShippingOption(optionsForRegion[0].id);
        } else {
          setShippingOption('');
        }
      } catch (error) {
        console.error('Failed to fetch shipping options:', error);
      }
    };

    fetchShippingOptions();
  }, [selectedRegion, cart?.id, MEDUSA_BACKEND_URL]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            onSubmit({ ...data, region: selectedRegion, shippingOption })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="first_name" label="First name" />
            <FormInput required name="last_name" label="Last name" />
            <FormInput required name="address_1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="postal_code" label="Zip / Postal code" />

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Region</InputLabel>
              <Select
                value={selectedRegion}
                fullWidth
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map((region) => (
                  <MenuItem key={region.id} value={region.id}>
                    {region.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {shippingOptions.length > 0 ? (
                  shippingOptions.map((opt) => (
                    <MenuItem key={opt.id} value={opt.id}>
                      {opt.name} — ({(opt.amount / 100).toFixed(2)}{' '}
                      {opt.currency_code.toUpperCase()})
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>No shipping options</MenuItem>
                )}
              </Select>
            </Grid>
          </Grid>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;