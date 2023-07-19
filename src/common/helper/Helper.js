import DeviceInfo from 'react-native-device-info';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const actuatedNormalize = size => {
  return DeviceInfo.isTablet()
    ? widthPercentageToDP(size * 0.25)
    : widthPercentageToDP(size * 0.25);
};
