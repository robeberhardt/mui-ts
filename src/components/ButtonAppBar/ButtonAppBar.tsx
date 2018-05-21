// import * as React from "react";
// // import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import withStyles, {
//   WithStyles,
//   StyleRulesCallback
// } from "@material-ui/core/styles/withStyles";
// import withRoot from "../../withRoot";

// type C = "root";
// interface P {}

// const styles: StyleRulesCallback<C> = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// });

// function ButtonAppBar({ classes }: P & WithStyles<C>) {
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="Menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             Title
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// export default withRoot(withStyles(styles)<{}>(ButtonAppBar));
