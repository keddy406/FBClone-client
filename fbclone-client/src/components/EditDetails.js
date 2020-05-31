import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import MyButton from "../util/MyButton";
//Redux stuff
import { connect } from "react-redux";
import { editUserDetails } from "../redux/actions/userActions";

//MUI stuff
import {
  
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  
} from "@material-ui/core";

//Icons
import EditIcon from "@material-ui/icons/Edit";

const styles = (theme) => ({
  ...theme.spreadThis,
  button: {
    float: "right",
  },
});
class EditDetails extends Component {
  state = {
    bio: "",
    website: "",
    location: "",
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }
  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : "",
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location,
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton tip="編輯個人資訊" onClick={this.handleOpen} btnClassName={classes.button}
        >
          <EditIcon color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleColse}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>編輯個人資訊</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
                type="text"
                label="自我介紹"
                multiline
                row="3"
                placeholder="你的自我介紹"
                className={classes.textField}
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
            <form>
              <TextField
                name="website"
                type="text"
                label="個人網站"
                placeholder="您的個人網站"
                className={classes.textField}
                value={this.state.website}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
            <form>
              <TextField
                name="location"
                type="text"
                label="出沒地"
                placeholder="你的出沒地"
                className={classes.textField}
                value={this.state.location}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              取消
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              儲存
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
EditDetails.proptype = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { editUserDetails })(
  withStyles(styles)(EditDetails)
);
