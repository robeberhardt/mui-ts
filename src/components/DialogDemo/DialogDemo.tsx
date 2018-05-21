import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
// import ButtonAppBar from "../ButtonAppBar/ButtonAppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import BadgeDemo from "../BadgeDemo/BadgeDemo";
import withStyles, {
  WithStyles,
  StyleRulesCallback
} from "@material-ui/core/styles/withStyles";
import withRoot from "../../withRoot";

const styles: StyleRulesCallback<"root"> = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

type State = {
  open1: boolean;
  open2: boolean;
  mobileOpen: boolean;
};

class DialogDemo extends React.Component<WithStyles<"root">, State> {
  state = {
    open1: false,
    open2: false,
    mobileOpen: true
  };

  // handleClose = () => {
  //   this.setState({
  //     open1: false
  //   });
  // };

  // handleClick = (message: string, e: React.MouseEvent<HTMLElement>) => {
  //   alert(`${message}, ${e.target}`);
  //   this.setState({
  //     open1: true
  //   });
  // };

  handleClick = (message: string) => (e: React.MouseEvent<HTMLElement>) => {
    switch (message) {
      case "hi":
        this.setState({ open1: true });
        break;
      case "wtf":
        this.setState({ open2: true });
        break;
      default:
    }
  };

  handleClose = (message: string) => (e: React.MouseEvent<HTMLElement>) => {
    switch (message) {
      case "hi":
        this.setState({ open1: false });
        break;
      case "wtf":
        this.setState({ open2: false });
        break;
      default:
    }
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <BadgeDemo />
        <AppBar>
          <Typography variant="display1" color="secondary" gutterBottom>
            Material-UI
          </Typography>
        </AppBar>
        <Dialog open={this.state.open1} onClose={this.handleClose("hi")}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose("hi")}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* <Typography variant="subheading" gutterBottom>
          example project
        </Typography> */}
        <Button
          id="hi"
          variant="raised"
          color="primary"
          onClick={this.handleClick("hi")}
        >
          Super Secret Password
        </Button>
        <Divider />
        <Button
          id="wtf"
          variant="outlined"
          color="secondary"
          onClick={this.handleClick("wtf")}
        >
          Blargity Blarg Blarg!
        </Button>
        <Dialog open={this.state.open2} onClose={this.handleClose("wtf")}>
          <DialogTitle>Another secret thing!</DialogTitle>
          <DialogContent>
            <DialogContentText>blargle dargle</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose("wtf")}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(DialogDemo));
