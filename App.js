import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UsersScreen from "./screens/UsersScreen";
import ExperiencesScreen from "./screens/ExperiencesScreen";
import ExperiencesFilterScreen from "./screens/ExperiencesFilterScreen";
import HomeScreen from "./screens/HomeScreen";
// Importa las imágenes de los iconos
import iconoUsuarios from './assets/icons/user.jpg';
import iconoHome from './assets/icons/home.jpg';
import iconoExperiencias from './assets/icons/experiencias.jpg';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home" // Home pantalla inicial
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;
            if (route.name === 'Usuarios') {
              iconSource = iconoUsuarios; 
            } else if (route.name === 'Home') {
              iconSource = iconoHome; 
            } else if (route.name === 'Experiencias') {
              iconSource = iconoExperiencias; 
            } else if (route.name === 'ExperienciasFilter') {
            }

            // Reducir el tamaño del ícono si está seleccionado o no
            return (
              <Image
                source={iconSource}
                style={{
                  width: focused ? 30 : 25,  
                  height: focused ? 30 : 25, 
                }}
                resizeMode="contain" // Ajusta el icono dentro del contenedor
              />
            );
          },
          tabBarActiveTintColor: "#42f44b",  // Color del texto cuando está seleccionado
          tabBarInactiveTintColor: "gray",   // Color del texto cuando no está seleccionado
          tabBarStyle: {
            display: "flex",                // Estilo de la barra
          },
        })}
      >
        <Tab.Screen name="Usuarios" component={UsersScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Experiencias" component={ExperiencesScreen} />
        <Tab.Screen name="ExperienciasFilter" component={ExperiencesFilterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
