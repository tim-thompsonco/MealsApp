import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../config/colors';

const mealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

export default createAppContainer(mealsNavigator);
