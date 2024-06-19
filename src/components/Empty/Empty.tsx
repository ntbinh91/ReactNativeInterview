import React from 'react';
import {Text, View} from 'react-native';
import {ClipboardDocumentIcon} from 'react-native-heroicons/outline';
import styles from './Empty.styles';

const Empty = () => {
  return (
    <View style={styles.wrapper}>
      <ClipboardDocumentIcon size={50} color="gray" />
      <Text style={styles.text}>No data</Text>
    </View>
  );
};

export default Empty;
