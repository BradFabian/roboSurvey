import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import DropDown from '../components/DropDown/DropDown';
import ManagerChart from '../components/BarChart/BarChart';
import SimpleTable from '../components/SimpleTable/SimpleTable';
import API from '../utils/API';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Manager extends React.Component {
  state = {
    open: true,
    data: [],
    names: []
  };

  loadEvals = query => {
    API.getAllEvals()
    .then(res => this.setState({data: res.data, names: res.data}))
    .catch(err => console.log(err));
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.loadEvals();
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
        <DropDown />
          <main className={classes.content}>
          <br></br>
            <div className={classes.chartContainer}>
            <ManagerChart />
            <br></br>
            <br></br>
            </div>
            <div className={classes.appBarSpacer} />
            <Typography variant="h4" gutterBottom component="h2">
              Employee List
            </Typography>
            <div className={classes.tableContainer}>
              <SimpleTable />
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Manager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Manager);