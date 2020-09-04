import React from 'react';
import {View, Text} from 'react-native';

function CategoriesScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
