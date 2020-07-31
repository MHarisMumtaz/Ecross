import { registerScreens } from './navigations/RegisterScreens';
import { Navigation } from 'react-native-navigation';
import CheckoutButton from './components/checkoutButton';

const startApp = () => {
	registerScreens();
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
	    rightButtons: [
	      {
	      	id: 'some',
	        component: {
	        	name: 'CheckoutButton'
	        }
	      },
	    ],
	    backButton: {
	      color: 'white'
	    },
	    background: {
	      color: '#4d089a'
	    }
	  }
	});
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