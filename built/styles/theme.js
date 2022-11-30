"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@mui/material/styles");
var theme = (0, styles_1.createTheme)({
    palette: {
        type: 'light',
        primary: {
            main: '#273035',
            contrastText: '#EF9A9A',
        },
        secondary: {
            main: '#EF9A9A',
            contrastText: '#273035'
        },
    },
    components: {
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: '#EF9A9A',
                    boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2),0px -4px 5px 0px rgba(0,0,0,0.14),0px -1px 10px 0px rgba(0,0,0,0.12)',
                    position: 'sticky',
                    bottom: 0
                }
            }
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: '#273035',
                    '&.Mui-selected': {
                        color: '#990033'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#263238',
                    color: '#F5F5F5'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#263238',
                    color: '#F5F5F5'
                }
            }
        }
    }
});
theme = (0, styles_1.responsiveFontSizes)(theme);
exports.default = theme;
