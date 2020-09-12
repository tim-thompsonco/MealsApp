import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

function FavoritesScreen(props) {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
}

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
