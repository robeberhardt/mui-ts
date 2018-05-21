import * as React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
// import TypographyProps from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
// import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const decorate = withStyles(({ palette, spacing }) => ({
  root: {
    padding: spacing.unit,
    backgroundColor: palette.background.default
    // color: palette.primary.main
  }
}));

interface Props {
  text: string;
  variant: TypographyProps["variant"];
  color: TypographyProps["color"];
}

const DecoratedSFC = decorate<Props>(({ text, variant, color, classes }) => (
  <Typography variant={variant} color={color} classes={classes}>
    {text}
  </Typography>
));

export default DecoratedSFC;

// const styles: StyleRulesCallback<
//   "container" | "paper" | "divider"
// > = theme => ({
//   container: {
//     display: "grid",
//     gridTemplateColumns: "repeat(12, 1fr)",
//     gridGap: `${theme.spacing.unit * 3}px`
//   },
//   paper: {
//     padding: theme.spacing.unit,
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     whiteSpace: "nowrap",
//     marginBottom: theme.spacing.unit
//   },
//   divider: {
//     margin: `${theme.spacing.unit * 2}px 0`
//   }
// });

// const MyOtherGrid: React.SFC<WithStyles<styles> {

// }

// const MyOtherGrid = withStyles((theme) => ({

// }))(({ classes }) => (
//     <div>
//     <Typography variant="subheading" gutterBottom>
//       Material-UI Grid:
//     </Typography>
//     <Grid container spacing={24}>
//       <Grid item xs={3}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </Grid>
//       <Grid item xs={3}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </Grid>
//       <Grid item xs={3}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </Grid>
//       <Grid item xs={3}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </Grid>
//       <Grid item xs={8}>
//         <Paper className={classes.paper}>xs=8</Paper>
//       </Grid>
//       <Grid item xs={4}>
//         <Paper className={classes.paper}>xs=4</Paper>
//       </Grid>
//     </Grid>
//     <Divider className={classes.divider} />
//     <Typography variant="subheading" gutterBottom>
//       CSS Grid Layout:
//     </Typography>
//     <div className={classes.container}>
//       <div style={{ gridColumnEnd: "span 3" }}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </div>
//       <div style={{ gridColumnEnd: "span 3" }}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </div>
//       <div style={{ gridColumnEnd: "span 3" }}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </div>
//       <div style={{ gridColumnEnd: "span 3" }}>
//         <Paper className={classes.paper}>xs=3</Paper>
//       </div>
//       <div style={{ gridColumnEnd: "span 8" }}>
//         <Paper className={classes.paper}>xs=8</Paper>
//       </div>
//       <div style={{ gridColumnEnd: "span 4" }}>
//         <Paper className={classes.paper}>xs=4</Paper>
//       </div>
//     </div>
//   </div>
// )
