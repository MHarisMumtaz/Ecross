import { registerScreens } from './navigations/RegisterScreens';
import { Navigation } from 'react-native-navigation';

const startApp = () => {
	registerScreens();
	Navigation.events().registerAppLaunchedListener(async () => {
	    setRoot();
	});
}

const setRoot = () => {
	Navigation.setRoot({
		root: {

	      stack: {
	        children: [
	          {
	            component: {
	              name: 'Home'
	            }
	          }
	        ]
	      }
	      
	    }
  	});
}

export { startApp };