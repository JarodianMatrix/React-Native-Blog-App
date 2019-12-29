// This is where we encapsulate the entire app with a blog post handler called app that has access to react navigation.

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import indexScreen from "./src/screens/indexScreen";
import {Provider} from "./src/context/blogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator({
    Index: indexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blog Posts'
    }
});

const App = createAppContainer(navigator);

export default () => {
     return <Provider>
         <App />
     </Provider>
};