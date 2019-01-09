import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import DialogForm from '../../../components/DialogForm';
import ChartFields from './Chart.fields';

const styles = theme => ({
	grow: {
		flexGrow: 1,
	},
	container: {
		flexGrow: 1,
		height: '100%',
	},
	title: {
		fontWeight: theme.typography.fontWeightMedium + 100,
		textTransform: 'uppercase',
		lineHeight: 1.5,
	},
	test: {
		border: 'solid tomato 1px',
	}
});

class EditChart extends Component {

	state = {
		open: false,
		updates: {
			title: '',
			description: '',
			copy: '',
			toggleText: '',
			query: '',
			citation: '',
			notes: '',
			active: false,
			order: 100,
			indicator: '',
		},
		_id: '',
	}

	handleOpen = event => {
		event.preventDefault();
		const { thisChart } = this.props;
		const { updates } = this.state;
		const setUpdates = {};
		Object.keys(updates).forEach((key) => setUpdates[key] = thisChart[key])
		this.setState({
			open: true,
			updates: {
				...setUpdates
			},
			id: thisChart._id
		})
	}

	handleChange = event => {
		event.preventDefault();
		this.setState({
			...this.state,
			updates: {
				...this.state.updates,
				[event.target.name]: event.target.value
			}
		})
	}

	onSubmit = event => {
		event.preventDefault();
		const { id, updates } = this.state;
		console.log(`updates:`, updates);
		this.props.dispatch({
			type: 'UPDATE_CHART',
			payload: updates,
			id: id
		});
		this.handleClose();
	}

	handleClose = event => {
		this.setState({
			open: false,
			updates:{
				title: '',
				description: '',
				copy: '',
				toggleText: '',
				query: '',
				citation: '',
				notes: '',
				indicator: '',
				active: false,
				order: 100,
				indicator: '',
			},
			id: '',
		})
	}

  render() {
		const { open, updates } = this.state;
		const { classes, thisChart } = this.props;
    return (
			<Fragment>
				<CardActionArea className={classes.container} onClick={this.handleOpen}>
					<Grid 
						container
						direction="column"
						justify="flex-start"
						alignItems="stretch"
						alignContent="stretch"
					>
						<Grid item xs={12}>
							<Typography variant="h6" align="center" className={classes.title}>
								{thisChart.title}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="body1">{thisChart.copy}</Typography>
						</Grid>
					</Grid>
				</CardActionArea>
				<DialogForm
					open={open}
					dialogTitle={'Edit Chart'}
					formId={'edit-chart'}
					formFields={
						<ChartFields
							handleChange={this.handleChange}
							chart={updates}
							editMode={true}
						/>
					}
					onSubmit={this.onSubmit}
					handleClose={this.handleClose}
				/>
			</Fragment>
    );
  }
}

EditChart.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default compose(
	connect(),
	withStyles(styles)
)(EditChart);