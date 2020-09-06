import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function MealDetailScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
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

export default MealDetailScreen;
