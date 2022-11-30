"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getStyles = function (_a) {
    var _b;
    var theme = _a.theme, props = _a.props;
    return ({
        root: (_b = {
                height: "calc(100vh - ".concat(props.navDiff, ")"),
                position: 'relative'
            },
            _b[theme.breakpoints.down('sm')] = {
                height: "calc(100vh - ".concat(props.mobileNavDiff, ")")
            },
            _b),
        heroImg: {
            filter: 'brightness(30%)',
            height: 'inherit'
        },
        heroTextWrapper: {
            padding: '0 3rem',
            position: 'absolute',
            textAlign: 'center',
            top: '40%'
        },
        heroTextDivider: {
            backgroundColor: '#ffffff80',
            borderColor: '#ffffff80',
            borderWidth: '.5px'
        }
    });
};
exports.default = getStyles;
