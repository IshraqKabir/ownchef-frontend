import { Badge, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    ShoppingCartIcon: {
        marginLeft: 'auto',
    }
});

export default function AppbarView() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Badge className={classes.ShoppingCartIcon} badgeContent={4} color="secondary" aria-label="yooo">
                        <ShoppingCartIcon />
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    );
}
