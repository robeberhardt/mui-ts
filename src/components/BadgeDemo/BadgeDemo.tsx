import * as React from "react";
import withStyles, {
  WithStyles,
  StyleRulesCallback
} from "@material-ui/core/styles/withStyles";
import Badge from "@material-ui/core/Badge";
import AlarmIcon from "@material-ui/icons/Alarm";
import AlarmOffIcon from "@material-ui/icons/ColorLens";
import MyOtherGrid from "../MyGrid/MyOtherGrid";

type C = "badge";

interface P {}

const styles: StyleRulesCallback<C> = theme => ({
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
});

function BadgeDemo({ classes }: P & WithStyles<C>) {
  return (
    <div>
      <MyOtherGrid variant="display2" color="error" text="blarg!!!" />
      <Badge className={classes.badge} badgeContent={4} color="secondary">
        <AlarmIcon />
      </Badge>
      <Badge className={classes.badge} badgeContent={10} color="primary">
        <AlarmOffIcon>folder</AlarmOffIcon>
      </Badge>
    </div>
  );
}

export default withStyles(styles)(BadgeDemo);
