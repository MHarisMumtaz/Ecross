import { Navigation } from 'react-native-navigation';
import { BOTTOM_TAB_STACK_ID, HAMBURGER_BUTTON_ID } from '../utils/Constants';

const registerEvents = () => {
	Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
		if(buttonId === HAMBURGER_BUTTON_ID){
			Navigation.mergeOptions(BOTTOM_TAB_STACK_ID, {
		        sideMenu: {
		          left: {
		            visible: true
		          }
		        }
		    });
		}
	});
}
export { registerEvents };