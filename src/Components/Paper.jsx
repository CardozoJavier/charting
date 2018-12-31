import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
	font: {
		color : '#151515',
		fontFamily : 'Roboto, Helvetica, Arial, sans-serif',
	}
});

function PaperSheet(props) {
  const { classes, title, paragraph, color } = props;

  return (
    <div>
      <Paper style= {{ 'backgroundColor': color}} className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          { title }
        </Typography>
        <Typography className= { classes.font } component="p">
					{ paragraph }
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);