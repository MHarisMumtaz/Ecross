import { Navigation } from 'react-native-navigation';
import { BOTTOM_TAB_STACK_ID, HAMBURGER_BUTTON_ID, MODAL_DISMISS_BUTTON_ID } from '../utils/Constants';
import { topBar } from './DefaultOptions';

const registerEvents = () => {
	Navigation.events().registerNavigationButtonPressedListener(({ buttonId, componentId }) => {
		if(buttonId === HAMBURGER_BUTTON_ID){
			Navigation.mergeOptions(BOTTOM_TAB_STACK_ID, {
		        sideMenu: {
		          left: {
		            visible: true
		          }
		        }
		    });
		}else if (buttonId === MODAL_DISMISS_BUTTON_ID) {
	        Navigation.dismissModal(componentId);
	    }
	});
}
export { registerEvents };