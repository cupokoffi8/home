import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  rmbutton: {
    backgrounColor: '#ff0000', 
  }, 
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
