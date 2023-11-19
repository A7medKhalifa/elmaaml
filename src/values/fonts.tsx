import { Platform } from 'react-native';

const Fonts = {
  ReadexProBold: Platform.OS === 'ios' ? 'ReadexPro-Bold' : 'ReadexPro-Bold',
  ReadexProExtraLight: Platform.OS === 'ios' ? 'ReadexPro-ExtraLight' : 'ReadexPro-ExtraLight',
  ReadexProLight: Platform.OS === 'ios' ? 'ReadexPro-Light' : 'ReadexPro-Light',
  ReadexProMedium: Platform.OS === 'ios' ? 'ReadexPro-Medium' : 'ReadexPro-Medium',
  ReadexProRegular: Platform.OS === 'ios' ? 'ReadexPro-Regular' : 'ReadexPro-Regular',
  ReadexProSemiBold: Platform.OS === 'ios' ? 'ReadexPro-SemiBold' : 'ReadexPro-SemiBold',
};
export default Fonts;
