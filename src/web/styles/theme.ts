import { createMuiTheme, Theme } from '@material-ui/core/styles';

// Styles.
import palette from './palette';

export const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: palette.brand.purple500,
        },
        secondary: {
            main: palette.brand.green500,
        },
    },
    typography: {
        useNextVariants: true,
    },
});
