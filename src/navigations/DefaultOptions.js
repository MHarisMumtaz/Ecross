import colors from '../commons/Colors';
import Screens from './Screens';
import { showModal } from '../services/modelService';
import { HAMBURGER_BUTTON_ID, TOP_RIGHT_BUTTON_ID } from '../utils/Constants';

const MenuIcon = require("../../assets/menu48.png");
const AppIcon = require('../../assets/ecross-logo.png');

const topBarBackground = {
    background: {
	  color: colors.background
	}
};

const topBarTitle = {
    component : {
      	name: Screens.EImageButton,
      	alignment: 'center',
      	passProps: {
      		src: AppIcon
      	}
    },
    alignment: 'center'
};

export const topBarLeftButton = [{
  	id: HAMBURGER_BUTTON_ID,
  	icon: MenuIcon,
  	component: {
		name: Screens.EMenuButton,
		passProps: {
			icon: 'ios-menu-outline',
			color: colors.primary,
			size: 30
		},
  	}
}];

const topBarRightButtons = [
  {
  	id: TOP_RIGHT_BUTTON_ID,
    component: {
    	name: Screens.EIconButton,
    	passProps: {
    		icon: 'person-outline',
    		color: colors.primary,
        onPress: () => {
          showModal(Screens.UserProfile);
        }
    	}
    }
  },
];

const topBarBackButton = {
  color: colors.primary
};

const topBar = {
	background: topBarBackground,
	title: topBarTitle,
	leftButtons: topBarLeftButton,
	rightButtons: topBarRightButtons,
	backButton: topBarBackButton
};

const sideMenu = {
    openGestureMode: 'bezel',
    left: {
        visible: false,
        enabled: true
    },
    right: {
        visible: false,
        enabled: false
    }
}
export { topBar, sideMenu };