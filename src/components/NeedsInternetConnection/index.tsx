import React, { ReactNode } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { styles } from './styles';
import { Modal, View, Text } from 'react-native';

type Props = {
  children: ReactNode;
  isVisible?: boolean;
};
const NeedsInternetConnection = ({ children }: Props) => {
  const { isInternetReachable, details } = useNetInfo();
  if (!details) return null;
  // alert(isInternetReachable)
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isInternetReachable === false}>
        <View style={styles.constainer}>
          <Text style={styles.titleTextStyling}>لا يوجد اتصال بالإنترنت</Text>
        </View>
      </Modal>
      {children}
    </>
  );
};

export default NeedsInternetConnection;
