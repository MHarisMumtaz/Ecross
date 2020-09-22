import { Navigation } from 'react-native-navigation';
import { MODAL_DISMISS_BUTTON_ID } from '../utils/Constants';

const DEFAULT_OPTION = {
   topBar: {
	    leftButtons: {
	      id: MODAL_DISMISS_BUTTON_ID,
	      icon: require('../../assets/arrow-left.png')
	    },
	    subtitle: {
	    	text: 'lajsdjasd'
	    },
	    title: {
	    	text: 'Categories',
	    	alignment: 'center',
	    	color: 'Black'
	    }
  	}
}

export const showModal = (screenName, modalPresentationStyle = 'pageSheet', options = DEFAULT_OPTION) => {
	Navigation.showModal({
	  stack: {
	    children: [
	      {
	        component: {
	          name: screenName,
	          options: {...options, modalPresentationStyle}
	        }
	      }
	    ]
	  }
	});
}

export const dismissModal = (screenName) => {
	Navigation.dismissModal(screenName);
}