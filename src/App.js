import { registerScreens } from './navigations/RegisterScreens';
import { registerEvents } from './navigations/RegisterEvents';
import { Navigation } from 'react-native-navigation';
import { 
	HAMBURGER_BUTTON_ID, 
	TOP_RIGHT_BUTTON_ID, 
	SIDE_MENU_ID,
	BOTTOM_TAB_ID,
	BOTTOM_TAB_STACK_ID
} from './utils/Constants';
import colors from './commons/Colors';
const AppIcon = require('../assets/ecross-logo.png');

const startApp = () => {
	registerScreens();
	registerEvents();
	Navigation.events().registerAppLaunchedListener(async () => {
		setDefaultOptions();
	    setRoot();
	});
}
const setDefaultOptions = () => {
	Navigation.setDefaultOptions({
	  topBar: {
	    title: {
	      component : {
	      	id: 'AppIcon',
	      	name: 'EImageButton',
	      	alignment: 'center',
	      	passProps: {
	      		src: AppIcon
	      	}
	      },
	      alignment: 'center'
	    },
	    leftButtons: {
          id: HAMBURGER_BUTTON_ID,
          icon: require("../assets/menu48.png"),
          component: {
        	name: 'EMenuButton',
        	passProps: {
        		icon: 'ios-menu-outline',
        		color: colors.primary,
        		size: 30
        	}
	      }
        },
	    rightButtons: [
	      {
	      	id: TOP_RIGHT_BUTTON_ID,
	        component: {
	        	name: 'EIconButton',
	        	passProps: {
	        		icon: 'person-outline',
	        		color: colors.primary
	        	}
	        }
	      },
	    ],
	    backButton: {
	      color: colors.background
	    },
	    background: {
	      color: colors.background
	    }
	  }
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

export { startApp };