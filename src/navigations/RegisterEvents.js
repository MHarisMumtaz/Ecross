import { Navigation } from 'react-native-navigation';

const registerEvents = () => {
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
}
export { registerEvents };