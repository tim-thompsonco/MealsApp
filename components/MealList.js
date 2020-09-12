import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.find(
      (meal) => meal.id === itemData.item.id
    );

    return (
      <View style={styles.screen}>
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          imageUrl={itemData.item.imageUrl}
          onSelectMeal={() => {
            props.navigation.navigate({
              routeName: 'MealDetail',
              params: {
                mealId: itemData.item.id,
                mealTitle: itemData.item.title,
                isFav: isFavorite,
              },
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
