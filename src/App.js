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
	      	id: 'appicon',
	      	name: 'AppIconButton',
	      	alignment: 'center'
	      },
	      alignment: 'center'
	    },
	    leftButtons: {
          id: HAMBURGER_BUTTON_ID,
          icon: require("../assets/menu48.png"),
          component: {
        	name: 'MenuButton',
        	passProps: {
        		icon: 'ios-menu-outline',
        		color: '#ff5d5a',
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
	        		color: '#ff5d5a'
	        	}
	        }
	      },
	    ],
	    backButton: {
	      color: 'white'
	    },
	    background: {
	      color: 'white'
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
						        		icon: require("../assets/home48.png")
						        	}
						        }
				        	}
			            },{
			            	component: {
					            id: 'SearchTab',
					            name: 'Search',
					            options: {
					              bottomTab: {
					                icon: require("../assets/search48.png")
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
					                icon: require("../assets/heart48.png")
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