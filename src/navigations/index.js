import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../containers/auth/Login';

const RootNavigation = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    }  ,
    {
        headerMode: 'none'
    }
);

export default createAppContainer(RootNavigation);
