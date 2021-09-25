loadLuigi = () => {
    Luigi.setConfig({
        navigation: {
            nodes: [
                {
                    pathSegment: 'portal',
                    hideFromNav: true,
                    children: [
                        {
                            pathSegment: 'auth',
                            viewUrl: "login",
                            hideSideNav: true,
                            loadingIndicator: {
                                enabled: false,
                            },
                        }
                    ]
                }
            ]
        },
        communication: {
            customMessagesListeners: {
                overview: () => {

                    loadLuigiPostLogin();
                }
            }
        },
        routing: {
            useHashRouting: true,
        },
        settings: {
            hideNavigation: true,
        },
    });
}


loadLuigiPostLogin = () => {
    console.log('post login processing...')
    Luigi.setConfig(luigiConfigPostLogin())

}

luigiConfigPostLogin = () => {
    return {
        navigation: {
            //addNavHrefs: true,
            nodes: nodes(),
            productSwitcher: productSwitcher(),
            appSwitcher: appSwitcher(),
            contextSwitcher: contextSwitcher(),
            profile: profile()
        },
        routing: {
            useHashRouting: true
        },
        settings: settings()
    }
}


logoff = () => {
    loadLuigi();
    //Luigi.navigation().navigate('/overview/signin')
    //Luigi.navigation().openAsModal('/overview/signin', {title:'Users'});
}


nodes = () => {
    return [
        {
            pathSegment: 'overview',
            label: 'Top Navigation',
            viewUrl: '/secure/dashboard',
            children: [
                {
                    pathSegment: 'dashboard',
                    label: 'Dashboard',
                    link: '/secure/dashboard',
                    hideFromNav: 'true'
                },
                {
                    pathSegment: 'angular',
                    label: 'Angular',
                    viewUrl: 'https://angular.io/',
                    category: {
                        label: "Test Zone",
                        icon: "customize",
                        collapsible: true,
                    },
                    loadingIndicator: {
                        enabled: false,
                    }

                },
                {
                    pathSegment: 'svelte',
                    label: 'Svelte',
                    viewUrl: 'https://svelte.dev/',
                    category: {
                        label: "Test Zone",
                    },
                    loadingIndicator: {
                        enabled: false,
                    }
                },
                {
                    pathSegment: 'react',
                    label: 'React',
                    viewUrl: 'https://reactjs.org/',
                    category: {
                        label: "Test Zone",
                    },
                    loadingIndicator: {
                        enabled: false,
                    }
                },
                {
                    pathSegment: 'vue',
                    label: 'Vue',
                    viewUrl: 'https://vuejs.org/',
                    category: {
                        label: "Test Zone",
                    },
                    loadingIndicator: {
                        enabled: false,
                    },
                },
                {
                    pathSegment: 'vite',
                    label: 'Vite',
                    viewUrl: 'https://vitejs.dev/',
                    hideFromNav: true,
                    loadingIndicator: {
                        enabled: false,
                    },
                },
                {
                    pathSegment: 'parcel',
                    label: 'Parcel',
                    viewUrl: 'https://parceljs.org/',
                    hideFromNav: true,
                    loadingIndicator: {
                        enabled: false,
                    },
                },
                {
                    pathSegment: 'signin',
                    viewUrl: "login",
                    hideSideNav: false,
                    hideFromNav: false,
                    loadingIndicator: {
                        enabled: false,
                    },
                }
            ]
        }
    ]
}

settings = () => {
    return {
        header: {title: 'Packaging Framework'},
        hideNavigation: false,
        sideNavFooterText: 'Demo Project© 2021-22',
        sideNavCompactMode: false,
        responsiveNavigation: 'semiCollapsible',
        profileType: 'Fiori3',
    }
}

profile = () => {
    return {
        logout: {
            customLogoutFn: logoff
        },
        items: [
            {
                label: 'Change Profile'
            }
        ]
    }
}

contextSwitcher = () => {
    return {
        defaultLabel: 'Environment',
        parentNodePath: '/env',
        options: [
            {label: 'Development', "pathValue": "/dev"},
            {label: 'Integration', "pathValue": "/int"},
            {label: 'User Acceptance', "pathValue": "/pre-prod"},

        ]
    }
}

productSwitcher = () => {
    return {
        label: 'Legacy Projects-1',
        items: [
            {
                icon: "https://dev.to/favicon.ico",
                label: "Dev.to",
                externalLink: {
                    url: "https://dev.to/",
                    sameWindow: false
                }
            }
        ]
    }
}

appSwitcher = () => {
    return {
        showMainAppEntry: true,
        items: [
            {
                title: 'Vite Js',
                subTitle: 'Next Generation Frontend Tooling',
                link: '/overview/vite'
            },
            {
                title: 'Parcel JS',
                subTitle: 'Blazing fast, zero configuration web application bundler',
                link: '/overview/parcel'
            }

        ]
    }
}
