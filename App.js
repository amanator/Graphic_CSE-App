import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import About from './components/Screens/About';
import Home from './components/Screens/Home';
import Faculty from './components/Screens/Faculty'
import Placement from './components/Screens/Placement'
import Contact from './components/Screens/Contact';
import Admin from './components/Screens/Admin';
import AdminState from './Context/Admin/AdminState';
import NotificationState from './Context/Notifications/NotificationState';
import FacultyState from './Context/Faculty/FacultyState';
import CustomDrawer from './components/Utilities/CustomDrawer';
import PlacementState from './Context/Placement/PlacementState';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      <AdminState>

        <NotificationState>
          <FacultyState>
            <PlacementState>
              {/* <Placement/> */}
              {/* <Contact/> */}
              <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" screenOptions={{
                  drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 240,
                  },
                }}
                  drawerContent={props => <CustomDrawer {...props} />}
                >
                  <Drawer.Screen name="Home" component={Home} />
                  <Drawer.Screen name="Placement" component={Placement} />
                  <Drawer.Screen name="Faculty" component={Faculty} />
                  <Drawer.Screen name="Contact" component={Contact} />
                  <Drawer.Screen name="Admin" component={Admin} />
                  <Drawer.Screen name="About" component={About} options={{ drawerItemStyle: { display: 'none' } }} />
                </Drawer.Navigator>
                {/* <Stack.Navigator>
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator> */}
              </NavigationContainer>

            </PlacementState>
          </FacultyState>
        </NotificationState>
      </AdminState>

    </>
  );
}

const styles = StyleSheet.create({


});
