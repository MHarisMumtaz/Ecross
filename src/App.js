import { registerScreens } from './navigations/RegisterScreens';
import { Navigation } from 'react-native-navigation';

const startApp = () => {
	registerScreens();
	Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
		if(buttonId === 'sideMenu'){
			Navigation.mergeOptions('sideMenuCenterStack', {
		        sideMenu: {
		          left: {
		            visible: true
		          }
		        }
		    });
		}
	});
	Navigation.events().registerAppLaunchedListener(async () => {
	    setRoot();
	});
}

const setRoot = () => {
	Navigation.setDefaultOptions({
	  topBar: {
	    title: {
	      color: 'white',
	      text: 'Welcome',
	      alignment: 'center'
	    },
	    leftButtons: {
          id: 'sideMenu',
          icon: require("../assets/icons8-menu-48.png"),
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
	      	id: 'some',
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
	Navigation.setRoot({
		root: {
			sideMenu: {
		        id: "sideMenu",
		        left: {
		        	component: {
			            name: "LeftSideMenu"
			        }
		        },
		        center: {
		          	stack: {
			            id: "sideMenuCenterStack",
			            children: [{
			            	component: {
				                name: "Home"
				            }
			            }]
		        	}
		    	}
		    }		
	      // stack: {
	      //   children: [
	      //     {
	      //       component: {
	      //         name: 'Home'
	      //       }
	      //     }
	      //   ]
	      // }
	      
	    }
  	});
}

export { startApp };