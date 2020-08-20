import { registerScreens } from './navigations/RegisterScreens';
import { registerEvents } from './navigations/RegisterEvents';
import { topBar } from './navigations/DefaultOptions';
import { Navigation } from 'react-native-navigation';

import {
	TOP_RIGHT_BUTTON_ID, 
	SIDE_MENU_ID,
	BOTTOM_TAB_ID,
	BOTTOM_TAB_STACK_ID
} from './utils/Constants';
import colors from './commons/Colors';

const setDefaultOptions = () => {
	Navigation.setDefaultOptions({
	  topBar,
	   fab: {
            id: 'fab',
            visible: true,
            backgroundColor: '#000000',
            clickColor: '#ffffff',
            rippleColor: '#000000',
            iconColor: '#ffffff',
            alignVertically: 'bottom',
            alignHorizontally: 'right',
            actions: [{
                id: 'test',
                backgroundColor: '#000000',
            }, {
                id: 'test2',
                backgroundColor: '#ffffff',
            }],
        },
	});
}

const setRoot = () => {
	Navigation.setRoot({
		root: {
			sideMenu: {
		        id: SIDE_MENU_ID,
		        left: {
		        	component: {
			            name: "LeftSideMenu"
			        }
		        },
		        center: {
		          	bottomTabs : {
			            id: BOTTOM_TAB_ID,
			            animate: true,
			            backgroundColor: colors.background,
			            children: [{
			            	stack :{
			            		id: BOTTOM_TAB_STACK_ID,
			            		children: [{
					            	component: {
						                name: "Home"
						            }
						        }],
						        options : {
						        	bottomTab : {
						        		icon: require("../assets/home48.png"),
						        		iconColor: colors.primary,
						        		selectedIconColor: colors.secondary,
						        		fontSize:10,
						        		iconInsets: { top: 15 }
						        	}
						        }
				        	}
			            },{
			            	component: {
					            id: 'SearchTab',
					            name: 'Search',
					            options: {
					              bottomTab: {
					                icon: require("../assets/search48.png"),
					                iconColor:colors.primary,
					                selectedIconColor: colors.secondary,
					                iconInsets: { top: 15 }
					              },
					            },
					         },
			            },
			            {
			            	component: {
					            id: 'WishList',
					            name: 'WishList',
					            options: {
					              bottomTab: {
					                icon: require("../assets/heart48.png"),
					                iconColor:colors.primary,
					                selectedIconColor: colors.secondary,
					                iconInsets: { top: 15 }
					              },
					            },
					         },
			            }]
		        	}
		    	}
		    }
	    }
  	});
}

const startApp = () => {
	registerScreens();
	registerEvents();
	Navigation.events().registerAppLaunchedListener(async () => {
		setDefaultOptions();
	    setRoot();
	});
}
export { startApp };
