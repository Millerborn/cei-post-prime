import React, { Component } from 'react';
import { connect } from 'react-redux';

import propTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Typography, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const styles = theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    title: {
      textAlign: 'center',
      padding: 'auto',
      fontSize: '45px',
      fontWeight: 700,
      color: 'white',
      textTransform: 'uppercase',
      letterSpacing: '1.53px',
      lineHeight: '1em',
      fontFamily: 'Lato',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    card: {
      height: 350,
      position: 'relative',
      marginBottom: '5%',
    },
    media: {
      height: '100%',
      overflow: 'hidden'
    },
  });

class TitleIndicator extends Component {
  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="images/twincitiesblue.jpg"
                    title="title-background">
                    <Typography className={classes.title}>Macro Indicators</Typography>
                </CardMedia>
            </Card>
        </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

TitleIndicator.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(TitleIndicator));