import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    padding: 24, 
  },
  loading: {
    textAlign: 'center', 
    fontSize: '40px', 
  }, 
  root: {
    flexGrow: 1,
  },
}));
