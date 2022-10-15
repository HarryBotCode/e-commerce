import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
   height : 250,
  },
  cardContent: {
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));