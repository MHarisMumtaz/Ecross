import { registerScreens } from './navigations/RegisterScreens';
import { registerEvents } from './navigations/RegisterEvents';
import { topBar, sideMenu } from './navigations/DefaultOptions';
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
	  sideMenu
	});
}

const setRoot = () => {
	Navigation.setRoot({
		root: {
			sideMenu: {
		        id: SIDE_MENU_ID,
		        left: {
		        	component: {
			            name: "SideMenu"
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
						        		iconColor: colors.secondary,
						        		textColor: colors.secondary,
						        		selectedIconColor: colors.primary,
						        		selectedTextColor: colors.primary,
						        		fontSize:10,
						        		text: 'Home',
						        		iconInsets: { top: 15, bottom: 10 }
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
					                iconColor:colors.secondary,
					                textColor: colors.secondary,
					                text: 'Search',
					                selectedIconColor: colors.primary,
					                selectedTextColor: colors.primary,
					                iconInsets: { top: 15, bottom: 10 }
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
					                iconColor:colors.secondary,
					                textColor: colors.secondary,
					                text: 'WishList',
					                selectedIconColor: colors.primary,
					                selectedTextColor: colors.primary,
					                iconInsets: { top: 15, bottom: 10 }
					              },
					            },
					         },
			            },
			            {
			            	component: {
					            id: 'Notifications',
					            name: 'Notifications',
					            options: {
					              bottomTab: {
					                icon: require("../assets/notification48.png"),
					                iconColor:colors.secondary,
					                textColor: colors.secondary,
					                selectedIconColor: colors.primary,
					                selectedTextColor: colors.primary,
					                text: 'Notification',
					                iconInsets: { top: 15, bottom: 10 },
					                badge: '2'
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
