const styles = {
    toolbar: {
        '&.MuiToolbar-root': {
            minHeight: 'unset'
        }
    },
    mobileNav: {
        display: { xs: 'flex', md: 'none' }
    },

    mobileNavToggleIcon: {
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1
    },
    mobileListItemButton: {
        textAlign: 'center'
    },
    drawer: {
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
            width: '15rem'
        }
    },
    drawerBox: {
        textAlign: 'center'
    },
    drawerIcon: {
        margin: '1rem'
    },
    tabs: {
        display: { xs: 'none', md: 'flex' },
        flexGrow: 1
    },
    repoLinkIcon: {
        marginLeft: '.25rem',
        verticalAlign: 'middle'
    }
};

export default styles;