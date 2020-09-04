import { Platform } from 'react-native';

export const BORDER_RADIUS = 75;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 48 : 24;
export const PRIMARY_COLOR = '#2CB9B0';
export const INACTIVE_BORDER_COLOR = '#EEEEEE';
export const INACTIVE_ICON_COLOR = '#8A8D90';
export const topSectionImg = require('../../assets/images/pattern1.png');
export const facebookIcon = require('../../assets/images/icons/icon-facebook.png');
export const googleIcon = require('../../assets/images/icons/icon-google.png');
export const appleIcon = require('../../assets/images/icons/icon-apple.png');
export const borderOverlayImage = require('../../assets/images/borderPattern.png');

export const assets = [
  topSectionImg,
  facebookIcon,
  googleIcon,
  appleIcon,
  borderOverlayImage,
];
