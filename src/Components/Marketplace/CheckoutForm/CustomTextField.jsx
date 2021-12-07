import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller 
      render={({ field }) => <TextField {...field} label={label} fullWidth   required/>}
      control={control}      
      name={name}
      />
    </Grid>
  );
}

//  class FormInput extends React.Component {
//    constructor() {
//      super();
//      this.state = {
//        searchValue: ""
//      };
//    }

//    render() {
//      console.log(this.state.searchValue); // I just left it here so that you can see in console that state is changing
//      return (
        
//          <TextField
//             defaultValue={this.state.searchValue}
//             onChange={event => {
//             const { value } = event.target;
//             this.setState({ searchValue: value });
//             }}
//          />
       
//      );
//    }
//  }

export default FormInput; 
