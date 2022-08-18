const styles = (props) => {
    return ({
        root: {
            height: `calc(100vh - ${props.navDiff})`,
            position: 'relative'
        },
        mobileRoot: {
            height: `calc(100vh - ${props.mobileNavDiff})`,
        },
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
    })
};

export default styles;